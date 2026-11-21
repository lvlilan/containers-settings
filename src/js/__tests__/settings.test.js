import Settings from '../settings';

describe('Settings', () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  test('defaultSettings — Map с тремя настройками', () => {
    expect(settings.defaultSettings).toBeInstanceOf(Map);
    expect(settings.defaultSettings.get('theme')).toBe('dark');
    expect(settings.defaultSettings.get('music')).toBe('trance');
    expect(settings.defaultSettings.get('difficulty')).toBe('easy');
  });

  test('userSettings изначально пуст', () => {
    expect(settings.userSettings).toBeInstanceOf(Map);
    expect(settings.userSettings.size).toBe(0);
  });

  test('setSetting сохраняет пользовательскую настройку', () => {
    settings.setSetting('theme', 'light');
    expect(settings.userSettings.get('theme')).toBe('light');
    expect(settings.userSettings.size).toBe(1);
  });

  test('settings возвращает default при отсутствии пользовательских', () => {
    const result = settings.settings;
    expect(result.get('theme')).toBe('dark');
    expect(result.get('music')).toBe('trance');
    expect(result.get('difficulty')).toBe('easy');
  });

  test('settings накладывает пользовательские настройки на default', () => {
    settings.setSetting('theme', 'gray');
    settings.setSetting('music', 'rock');
    const result = settings.settings;
    expect(result.get('theme')).toBe('gray');
    expect(result.get('music')).toBe('rock');
    expect(result.get('difficulty')).toBe('easy');
  });

  test('settings возвращает новый Map (не мутирует исходные)', () => {
    settings.setSetting('theme', 'light');
    const result = settings.settings;
    expect(result).not.toBe(settings.defaultSettings);
    expect(settings.defaultSettings.get('theme')).toBe('dark');
  });
});
