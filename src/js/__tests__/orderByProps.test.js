import orderByProps from "../orderByProps";

describe("test function orderByProps", () => {
  describe("correct arguments", () => {
    const cases = [
      [
        { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 },
        ["name", "level"],
        [
          { key: "name", value: "мечник" },
          { key: "level", value: 2 },
          { key: "attack", value: 80 },
          { key: "defence", value: 40 },
          { key: "health", value: 10 },
        ],
      ],
      [
        { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 },
        ["name", "level", ""],
        [
          { key: "name", value: "мечник" },
          { key: "level", value: 2 },
          { key: "attack", value: 80 },
          { key: "defence", value: 40 },
          { key: "health", value: 10 },
        ],
      ],
      [
        { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 },
        ["", "level"],
        [
          { key: "level", value: 2 },
          { key: "attack", value: 80 },
          { key: "defence", value: 40 },
          { key: "health", value: 10 },
          { key: "name", value: "мечник" },
        ],
      ],
      [
        { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 },
        ["health", "level", "defence"],
        [
          { key: "health", value: 10 },
          { key: "level", value: 2 },
          { key: "defence", value: 40 },
          { key: "attack", value: 80 },
          { key: "name", value: "мечник" },
        ],
      ],
      [
        { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 },
        undefined,
        [
          { key: "attack", value: 80 },
          { key: "defence", value: 40 },
          { key: "health", value: 10 },
          { key: "level", value: 2 },
          { key: "name", value: "мечник" },
        ],
      ],
    ];
    test.each(cases)("%p, %p", (obj, props, reference) => {
      expect(orderByProps(obj, props)).toEqual(reference);
    });
  });

  describe("not correct arguments", () => {
    describe("bad object", () => {
      const cases = [[], 123, "123", null, undefined];

      test.each(cases)("%p", (obj) => {
        expect(() => orderByProps(obj)).toThrow(
          "ожидается объект для сортировки"
        );
      });
    });

    describe("bad props", () => {
      const character = {
        name: "мечник",
        health: 10,
        level: 2,
        attack: 80,
        defence: 40,
      };

      const cases = [{}, 123, "123", null];

      test.each(cases)("%p", (props) => {
        expect(() => orderByProps(character, props)).toThrow(
          "ожидается массив ключей"
        );
      });
    });
  });
});
