export interface DesktopSetting {
  settingKey: string
  settingValue: string
  createdAt?: string
  updatedAt?: string
}
export const desktopSettingsDefaults = (): DesktopSetting => ({
  settingKey: '',
  settingValue: '',
  createdAt: '',
  updatedAt: '',
});
