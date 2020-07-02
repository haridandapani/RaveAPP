package hari.raveapp;

import java.util.List;

public class Rave {

  private List<String> colorList;
  private int length;
  private double frequency;
  private long startTime;

  public Rave(List<String> colorList, int iterator, double frequency) {
    this.colorList = colorList;
    this.length = colorList.size();
    this.frequency = frequency;
    this.startTime = System.currentTimeMillis();
  }

  public String getColor() {
    return colorList.get((int) ((System.currentTimeMillis() - startTime) / frequency) % length);
  }

}
