import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ColorChanger from "./ColorChanger.vue";

describe("ColorChanger", () => {
  it("changes through background colors and emits updateBackgroundColor event on button clicks", async () => {
    const wrapper = mount(ColorChanger);

    const palette = ["#ff6666", "#a0db8e", "#7eaab5", "#e6e6fa"];

    for (let i = 0; i < palette.length; i++) {
      await wrapper.find("button").trigger("click");

      const currentColorIndex = (i + 1) % palette.length;
      const expectedColor = palette[currentColorIndex];

      expect(wrapper.emitted("updateBackgroundColor")[i]).toEqual([
        expectedColor,
      ]);
    }

    expect(wrapper.emitted("updateBackgroundColor").length).toBe(
      palette.length,
    );
  });

  it("fails when background color does not match the expected color", async () => {
    const wrapper = mount(ColorChanger);

    //2 button clicks
    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");

    //incorrect color
    const incorrectExpectedColor = "#ffffff"; //not in the palette

    expect(wrapper.emitted("updateBackgroundColor")[1]).not.toEqual([
      incorrectExpectedColor,
    ]);
  });
});
