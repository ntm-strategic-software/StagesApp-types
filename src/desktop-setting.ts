/** Represents a setting on Stages Desktop */
export interface DesktopSetting {
  /** Unique key for this setting */
  settingKey: string
  /** Value of this setting */
  settingValue: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
  createdAt: string
  /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
  updatedAt: string
}

/**
 * NewDesktopSetting is DesktopSetting with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewDesktopSetting extends Omit<DesktopSetting, 'createdAt' | 'updatedAt'> {
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
   * If not provided, it should be set when the row is created in the database.
   */
  createdAt?: string
  /**
   * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
   * If not provided, it should be set when the row is updated in the database.
   */
  updatedAt?: string
}

/** Returns a new DesktopSetting object with default values */
export const desktopSettingsDefaults = (): DesktopSetting => ({
  settingKey: '',
  settingValue: '',
  createdAt: '',
  updatedAt: '',
});

/** Interface defining helper methods for DesktopSetting */
export interface DesktopSettingHelper {
  set(setting: DesktopSetting, data: Partial<DesktopSetting>): DesktopSetting
}
/** Object with helper methods for DesktopSetting */
export const desktopSettingHelper: DesktopSettingHelper = {
  /** Creates an updated DesktopSetting object by merging an existing DesktopSetting object with new values */
  set(setting: DesktopSetting, data: Partial<DesktopSetting>): DesktopSetting {
    return {
      ...setting,
      ...data,
    };
  },
};
