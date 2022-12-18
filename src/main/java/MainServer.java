import Configuration.ServerConfig;
import Servlets.ApiManager.ApiCall;
import Servlets.ApiManager.ApiManager;
import Servlets.ApiManager.JsonDiff;
import Servlets.ApiManager.ToFlatJson;
import Servlets.Application;
import Servlets.DatabaseManager.DatabaseKnowledge;
import Servlets.DatabaseManager.DatabaseManager;
import Servlets.DatabaseManager.DatabaseSchema;
import Servlets.GoldStandard.SaveFinalAlignment;
import Servlets.GoldStandard.SuggestionsServelt;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ErrorPageErrorHandler;
import org.eclipse.jetty.webapp.WebAppContext;

public class MainServer {
    public static void main(String[] args) throws Exception {
        ServerConfig config = ServerConfig.fromFile("global-config.json");
        Server server = new Server(config.getPort());

        System.out.println("Initialising server..");
        WebAppContext webapp = new WebAppContext();
        webapp.setWar("Client");
        webapp.setContextPath("/");

        // Adding error handler
        ErrorPageErrorHandler errorHandler = new ErrorPageErrorHandler();
        errorHandler.addErrorPage(404, "/");
        webapp.setErrorHandler(errorHandler);

        // Adding api related servlets
        webapp.addServlet(ApiManager.class,"/etara/apiManager");
        webapp.addServlet(ApiCall.class,"/etara/apiManager/call");
        webapp.addServlet(JsonDiff.class,"/etara/apiManager/jsonDiff");
        webapp.addServlet(ToFlatJson.class,"/etara/apiManager/flatJson");

        // Adding database related servlets
        webapp.addServlet(DatabaseManager.class,"/etara/dbManager");
        webapp.addServlet(DatabaseKnowledge.class,"/etara/dbManager/knowledge");
        webapp.addServlet(DatabaseSchema.class,"/etara/dbManager/schema");

        // Adding goldstandard related servlets
        webapp.addServlet(SaveFinalAlignment.class,"/etara/gsb/saveFinalAlignment");
        webapp.addServlet(SuggestionsServelt.class,"/etara/gsb/suggestions");

        // Adding webservice related servlets
        Application application = new Application(config);
        application.contextInitialized(webapp);

        server.setHandler(webapp);

        try {
            server.start();
            System.out.println("Server started: http://localhost:" + config.getPort() + "/etara");
            server.join();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            server.stop();
        }

        System.out.println("Server closed..");
    }
}
