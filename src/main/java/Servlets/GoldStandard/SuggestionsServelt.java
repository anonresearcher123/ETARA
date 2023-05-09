package Servlets.GoldStandard;

import GoldStandardBuilder.SuggestionBuilder;
import Utils.JsonHelper.JsonBuilder;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;


@WebServlet(urlPatterns = "/gsb/suggestions")
public class SuggestionsServelt extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletOutputStream out = resp.getOutputStream();
        resp.setContentType("application/json;charset=UTF-8");

        JSONObject jsonRequest = JsonBuilder.requestToJson(req, resp);
        JSONObject respJson = new JSONObject();

        if (jsonRequest == null) {
            return;
        }

        JSONArray mappings;
        try {
            mappings = jsonRequest.getJSONArray("mappings");
        } catch (JSONException e) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "parameter mappings required");
            return;
        }

        JSONArray jsonArray = SuggestionBuilder.buildSuggestionArray(mappings);
        respJson.put("suggestions", jsonArray);
        String respString = respJson.toString();
        ByteBuffer bytes = StandardCharsets.ISO_8859_1.encode(respString);
        String output = StandardCharsets.ISO_8859_1.decode(bytes).toString();
        out.print(output);

        resp.setStatus(HttpServletResponse.SC_OK);

    }
}
