package hari.raveapp;

import java.util.Map;

import com.google.common.collect.ImmutableMap;

import spark.ModelAndView;
import spark.Request;
import spark.Response;
import spark.TemplateViewRoute;

public class RoomGUI implements TemplateViewRoute {

  @Override
  public ModelAndView handle(Request request, Response response) throws Exception {

    // TODO: can throw error if not number
    // response.type("application/javascript");
    try {
      int roomNumber = Integer.valueOf(request.splat()[0]);
      boolean success = App.getRooms().get(roomNumber) != null;
      if (success) {
        Map<String, Object> variables = ImmutableMap.<String, Object>builder()
            .put("roomNumber", roomNumber).build();
        request.session().attribute("roomNumber", roomNumber);
        return new ModelAndView(variables, "roomer.ftl");
      }
      response.redirect("/");
      return null;
    } catch (NumberFormatException e) {
      response.redirect("/");
      return null;

    }
  }

}
