export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  setSetting(name, value) {
    this.userSettings.set(name, value);
  }

  get settings() {
    const result = new Map(this.defaultSettings);
    this.userSettings.forEach((value, key) => {
      result.set(key, value);
    });
    return result;
  }
}
