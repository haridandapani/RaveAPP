package hari.raveapp;

import java.util.Map;

import com.google.common.collect.ImmutableMap;
import com.google.gson.Gson;

import spark.QueryParamsMap;
import spark.Request;
import spark.Response;
import spark.Route;

public class RaveGUI implements Route {

  @Override
  public String handle(Request request, Response response) throws Exception {
    QueryParamsMap vars = request.queryMap();
    int roomNumber = Integer.valueOf(vars.value("roomNumber"));
    Rave raven = App.getRooms().get(roomNumber);
    Map<String, Object> variables = ImmutableMap.<String, Object>builder()
        .put("color", raven.getColor()).build();
    return new Gson().toJson(variables);
  }

}
