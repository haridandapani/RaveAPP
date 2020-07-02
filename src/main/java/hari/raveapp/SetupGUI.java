package hari.raveapp;

import java.util.Arrays;
import java.util.Map;

import com.google.common.collect.ImmutableMap;
import com.google.gson.Gson;

import spark.QueryParamsMap;
import spark.Request;
import spark.Response;
import spark.Route;

public class SetupGUI implements Route {

  @Override
  public String handle(Request request, Response response) throws Exception {

    int roomNumber = (int) (Math.random() * 100000000);
    QueryParamsMap vars = request.queryMap();
    // System.out.println(vars.value("colors"));
    // System.out.println(vars.value("frequency"));
    // System.out.println(System.currentTimeMillis());

    Rave raven = new Rave(Arrays.asList(vars.value("colors").split(",")), 0,
        Double.valueOf(vars.value("frequency")));
    App.getRooms().put(roomNumber, raven);
    Map<String, Object> variables = ImmutableMap.<String, Object>builder()
        .put("roomNumber", roomNumber).build();
    return new Gson().toJson(variables);

  }
}
