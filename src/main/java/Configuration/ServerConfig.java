package Configuration;
import Exceptions.IdentifierMapException;
import Exceptions.ServerConfigException;
import QueryProcessing.QueryProcessor;
import Utils.JsonHelper.JsonImporter;
import org.apache.jena.atlas.json.JsonException;
import org.apache.jena.atlas.json.JsonObject;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSetFormatter;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ServerConfig {
	private final int port;
	private final String configPath;
	private final String webservicesEndpoint;
	private final Map<String, DatabaseConfig> databases;

	public ServerConfig(int port, String configPath, String webservicesEndpoint, Map<String, DatabaseConfig> databases) {
		this.port = port;
		this.configPath = configPath;
		this.webservicesEndpoint = webservicesEndpoint;
		this.databases = databases;
	}

	public static ServerConfig fromFile(String s) throws ServerConfigException, IdentifierMapException {
		JsonObject json;
		try {
			json = new JsonImporter().getJson(new File(s));
		} catch (IOException ioException) {
			throw new ServerConfigException(s);
		}

		int port;
		try{
			port = json.get("port").getAsNumber().value().intValue();
		} catch (JsonException e){
			throw new ServerConfigException("port", "is not correctly specified");
		}

		String dbsPath;
		try{
			dbsPath = json.get("dbPath").getAsString().value();
		} catch (JsonException e){
			throw new ServerConfigException("dbPath", "is not correctly specified");
		}

		JsonObject jsonDBs;
		try {
			jsonDBs = new JsonImporter().getJson(new File(dbsPath));
		} catch (IOException ioException) {
			throw new ServerConfigException(s);
		}

		String configPath;
		try{
			configPath = json.get("config-folder").getAsString().value();
		} catch (JsonException e){
			throw new ServerConfigException("path", "is not correctly specified");
		}

		String webservicesEndpoint;
		try{
			webservicesEndpoint = json.get("webservicesEndpoint").getAsString().value();
		} catch (JsonException e){
			throw new ServerConfigException("webservicesEndpoint", "is not correctly specified");
		}

		Map<String, DatabaseConfig> dbs = new HashMap<>();
		try {
			if (!jsonDBs.hasKey("databases"))
				throw new ServerConfigException("databases", "is required");

			for (var entry : jsonDBs.get("databases").getAsObject().entrySet()) {
				String dbPath = entry.getValue().getAsObject().get("path").getAsString().value();
				String identifierMapPath = entry.getValue().getAsObject().get("identifierMap").getAsString().value();
				boolean exists = new File(identifierMapPath).exists();

				if(exists){
					dbs.put(entry.getKey(), DatabaseConfig.fromJson(entry.getKey(), entry.getValue().getAsObject()));
				} else {
					createIdentifierMap(dbPath,identifierMapPath);
					dbs.put(entry.getKey(), DatabaseConfig.fromJson(entry.getKey(), entry.getValue().getAsObject()));
				}
			}
		} catch (JsonException e) {
			throw new ServerConfigException("databases", "needs to be an object containing objects with a 'path' and an optional 'identifierMap' each");
		}

		return new ServerConfig(port, configPath, webservicesEndpoint, dbs);
	}

	public static void createIdentifierMap(String path, String identifierMapPath){
		String queryString = "select distinct ?p where { ?s ?p ?o . }";

		QueryProcessor qp = new QueryProcessor(queryString,path);
		List<QuerySolution> solutions = ResultSetFormatter.toList(qp.query());
		qp.close();

		JsonObject identifierMap = new JsonObject();
		for(QuerySolution solution : solutions){
			if(solution.get("p").toString().contains("#")){
				String key = solution.get("p").toString().substring(solution.get("p").toString().lastIndexOf("#")+1);
				identifierMap.put(key, "<"+solution.get("p")+">");
			} else {
				String key = solution.get("p").toString().substring(solution.get("p").toString().lastIndexOf("/")+1);
				identifierMap.put(key, "<"+solution.get("p")+">");
			}
		}

		try {
			File file = new File(identifierMapPath);
			file.createNewFile();

			FileWriter myWriter = new FileWriter(file);
			myWriter.write(identifierMap.toString());
			myWriter.close();
		} catch (IOException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
	}

	public int getPort(){
		return port;
	}

	public String getConfigPath() {
		return configPath;
	}

	public String getWebservicesEndpoint() {
		return webservicesEndpoint;
	}

	public Map<String, DatabaseConfig> getDatabases() {
        return databases;
    }

    public DatabaseConfig getDatabase(String name) {
	    return databases.get(name);
    }

}
