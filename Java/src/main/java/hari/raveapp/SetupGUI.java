package hari.raveapp;

import java.util.Map;

import com.google.common.collect.ImmutableMap;

import spark.ModelAndView;
import spark.QueryParamsMap;
import spark.Request;
import spark.Response;
import spark.TemplateViewRoute;

public class SetupGUI implements TemplateViewRoute {

  @Override
  public ModelAndView handle(Request request, Response response) throws Exception {

    int roomNumber = (int) (Math.random() * 100000000);
    QueryParamsMap vars = request.queryMap();
    vars.value("colorsList");
    // add room to session
    App.getRooms().put(roomNumber, null);
    Map<String, Object> variables = ImmutableMap.<String, Object>builder()
        .put("roomNumber", roomNumber).build();
    return new ModelAndView(variables, "index.ftl");

  }
}
