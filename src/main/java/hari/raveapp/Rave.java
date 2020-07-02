package hari.raveapp;

import java.util.List;

public class Rave {

  private List<String> colorList;
  private int length;
  private int iterator;
  private double freqency;
  private long lastUpdated;

  public Rave(List<String> colorList, int iterator, double frequency) {
    this.colorList = colorList;
    this.length = colorList.size();
    this.iterator = iterator;
    this.freqency = frequency;
    this.lastUpdated = System.currentTimeMillis();
  }

  public void update() {
    if (System.currentTimeMillis() - this.lastUpdated > this.freqency) {
      // update
      this.lastUpdated = System.currentTimeMillis();
      this.iterator = (this.iterator + 1) % this.length;
    }
  }

  public String getColor() {
    return colorList.get(iterator);
  }

}
