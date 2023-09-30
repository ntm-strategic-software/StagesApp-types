import { DesktopSetting as DesktopSettingInterface, desktopSettingsDefaults } from '../desktop-setting';

/**
 * Class representing a setting on Stages Desktop.
 */
export class DesktopSetting implements DesktopSettingInterface {
  /**
   * Unique key for this setting.
   */
  settingKey: string;

  /**
   * Value of this setting.
   */
  settingValue: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database
   */
  createdAt?: string;

  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database
   */
  updatedAt?: string;

  /**
   * Constructs a DesktopSetting object
   */
  constructor(data?: DesktopSettingInterface) {
    const defaults = desktopSettingsDefaults();
    this.settingKey = data?.settingKey || defaults.settingKey;
    this.settingValue = data?.settingValue || defaults.settingValue;
    this.createdAt = data?.createdAt || defaults.createdAt;
    this.updatedAt = data?.updatedAt || defaults.updatedAt;
  }

  /**
   * Creates an updated DesktopSetting object
   */
  set(data: Partial<DesktopSettingInterface>) {
    return new DesktopSetting({
      ...this,
      ...data,
    });
  }

}
