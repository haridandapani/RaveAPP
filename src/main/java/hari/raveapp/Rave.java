package hari.raveapp;

import java.util.List;

public class Rave {

  private List<String> colorList;
  private int length;
  private double frequency;
  private long startTime;

  public Rave(List<String> colorList, long startTime, double frequency) {
    this.colorList = colorList;
    this.length = colorList.size();
    this.frequency = frequency;
    this.startTime = startTime;
  }

  public String getColor(long currentTime) {
    return colorList.get((int) ((currentTime - startTime) / frequency) % length);
  }

}
