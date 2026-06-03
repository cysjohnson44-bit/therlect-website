/**
 * Email Configuration for Therlect Website
 * Centralized configuration for all email notifications
 */

export const EMAIL_CONFIG = {
  // Admin email address for all notifications (DISABLED)
  ADMIN_EMAIL: "",
  
  // Email notification types and their configurations
  NOTIFICATION_TYPES: {
    BOOKING: {
      name: "預約洽談",
      description: "客戶提交預約洽談表單時發送",
      enabled: false,
    },
    CONTACT_FORM: {
      name: "聯絡表單",
      description: "客戶提交聯絡表單時發送",
      enabled: false,
    },
    CUSTOMER_INQUIRY: {
      name: "客服詢問",
      description: "客戶提交客服詢問時發送",
      enabled: false,
    },
  },

  // Email response time
  RESPONSE_TIME_HOURS: 24,

  // Company contact information
  COMPANY: {
    name: "Therlect 汎海科技",
    phone: "+886-2-2999-5596",
    email: "",
  },
};

/**
 * Check if a specific notification type is enabled
 */
export function isNotificationTypeEnabled(type: keyof typeof EMAIL_CONFIG.NOTIFICATION_TYPES): boolean {
  return EMAIL_CONFIG.NOTIFICATION_TYPES[type]?.enabled ?? false;
}

/**
 * Get all enabled notification types
 */
export function getEnabledNotificationTypes() {
  return Object.entries(EMAIL_CONFIG.NOTIFICATION_TYPES)
    .filter(([, config]) => config.enabled)
    .map(([type]) => type);
}
