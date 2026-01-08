export interface DesktopSetting {
  settingKey: string
  settingValue: string
  createdAt: string
  updatedAt: string
}

export interface NewDesktopSetting extends Omit<DesktopSetting, 'createdAt' | 'updatedAt'> {
  createdAt?: string
  updatedAt?: string
}

export const desktopSettingsDefaults = (): DesktopSetting => ({
  settingKey: '',
  settingValue: '',
  createdAt: '',
  updatedAt: '',
});

export interface DesktopSettingHelper {
  set(setting: DesktopSetting, data: Partial<DesktopSetting>): DesktopSetting
}
export const desktopSettingHelper = {
  /**
   * Creates an updated DesktopSetting object
   */
  set(setting: DesktopSetting, data: Partial<DesktopSetting>): DesktopSetting {
    return {
      ...setting,
      ...data,
    };
  },
};
