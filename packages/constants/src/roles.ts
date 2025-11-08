/**
 * User roles and permissions constants
 */

/**
 * Role IDs
 */
export const ROLE_IDS = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  MANAGER: 'manager',
  MEMBER: 'member',
  GUEST: 'guest',
} as const;

/**
 * Role names (display)
 */
export const ROLE_NAMES = {
  [ROLE_IDS.SUPER_ADMIN]: 'Super Admin',
  [ROLE_IDS.ADMIN]: 'Admin',
  [ROLE_IDS.MANAGER]: 'Manager',
  [ROLE_IDS.MEMBER]: 'Member',
  [ROLE_IDS.GUEST]: 'Guest',
} as const;

/**
 * Role descriptions
 */
export const ROLE_DESCRIPTIONS = {
  [ROLE_IDS.SUPER_ADMIN]: 'Full system access with platform management',
  [ROLE_IDS.ADMIN]: 'Full company access with user management',
  [ROLE_IDS.MANAGER]: 'Team management and workflow oversight',
  [ROLE_IDS.MEMBER]: 'Standard user with workflow execution',
  [ROLE_IDS.GUEST]: 'Limited read-only access',
} as const;

/**
 * Permission categories
 */
export const PERMISSION_CATEGORIES = {
  USER: 'user',
  COMPANY: 'company',
  WORKFLOW: 'workflow',
  DOCUMENT: 'document',
  INTEGRATION: 'integration',
  SUBSCRIPTION: 'subscription',
  ANALYTICS: 'analytics',
  ADMIN: 'admin',
} as const;

/**
 * All permissions
 */
export const PERMISSIONS = {
  // User permissions
  USER_READ: 'user:read',
  USER_WRITE: 'user:write',
  USER_DELETE: 'user:delete',
  USER_INVITE: 'user:invite',
  USER_MANAGE_ROLES: 'user:manage_roles',
  
  // Company permissions
  COMPANY_READ: 'company:read',
  COMPANY_WRITE: 'company:write',
  COMPANY_DELETE: 'company:delete',
  COMPANY_SETTINGS: 'company:settings',
  COMPANY_BILLING: 'company:billing',
  
  // Workflow permissions
  WORKFLOW_READ: 'workflow:read',
  WORKFLOW_WRITE: 'workflow:write',
  WORKFLOW_DELETE: 'workflow:delete',
  WORKFLOW_EXECUTE: 'workflow:execute',
  WORKFLOW_PUBLISH: 'workflow:publish',
  WORKFLOW_MANAGE: 'workflow:manage',
  
  // Document permissions
  DOCUMENT_READ: 'document:read',
  DOCUMENT_WRITE: 'document:write',
  DOCUMENT_DELETE: 'document:delete',
  DOCUMENT_PROCESS: 'document:process',
  DOCUMENT_SHARE: 'document:share',
  
  // Integration permissions
  INTEGRATION_READ: 'integration:read',
  INTEGRATION_WRITE: 'integration:write',
  INTEGRATION_DELETE: 'integration:delete',
  INTEGRATION_CONNECT: 'integration:connect',
  INTEGRATION_MANAGE: 'integration:manage',
  
  // Subscription permissions
  SUBSCRIPTION_READ: 'subscription:read',
  SUBSCRIPTION_WRITE: 'subscription:write',
  SUBSCRIPTION_MANAGE: 'subscription:manage',
  
  // Analytics permissions
  ANALYTICS_READ: 'analytics:read',
  ANALYTICS_EXPORT: 'analytics:export',
  ANALYTICS_MANAGE: 'analytics:manage',
  
  // Admin permissions
  ADMIN_USERS: 'admin:users',
  ADMIN_COMPANIES: 'admin:companies',
  ADMIN_SYSTEM: 'admin:system',
  ADMIN_AUDIT_LOGS: 'admin:audit_logs',
  ADMIN_SECURITY: 'admin:security',
} as const;

/**
 * Permission groups (for easier management)
 */
export const PERMISSION_GROUPS = {
  USER_BASIC: [
    PERMISSIONS.USER_READ,
  ],
  USER_MANAGEMENT: [
    PERMISSIONS.USER_READ,
    PERMISSIONS.USER_WRITE,
    PERMISSIONS.USER_DELETE,
    PERMISSIONS.USER_INVITE,
    PERMISSIONS.USER_MANAGE_ROLES,
  ],
  COMPANY_BASIC: [
    PERMISSIONS.COMPANY_READ,
  ],
  COMPANY_MANAGEMENT: [
    PERMISSIONS.COMPANY_READ,
    PERMISSIONS.COMPANY_WRITE,
    PERMISSIONS.COMPANY_SETTINGS,
  ],
  COMPANY_ADMIN: [
    PERMISSIONS.COMPANY_READ,
    PERMISSIONS.COMPANY_WRITE,
    PERMISSIONS.COMPANY_DELETE,
    PERMISSIONS.COMPANY_SETTINGS,
    PERMISSIONS.COMPANY_BILLING,
  ],
  WORKFLOW_BASIC: [
    PERMISSIONS.WORKFLOW_READ,
    PERMISSIONS.WORKFLOW_EXECUTE,
  ],
  WORKFLOW_CREATOR: [
    PERMISSIONS.WORKFLOW_READ,
    PERMISSIONS.WORKFLOW_WRITE,
    PERMISSIONS.WORKFLOW_EXECUTE,
  ],
  WORKFLOW_ADMIN: [
    PERMISSIONS.WORKFLOW_READ,
    PERMISSIONS.WORKFLOW_WRITE,
    PERMISSIONS.WORKFLOW_DELETE,
    PERMISSIONS.WORKFLOW_EXECUTE,
    PERMISSIONS.WORKFLOW_PUBLISH,
    PERMISSIONS.WORKFLOW_MANAGE,
  ],
  DOCUMENT_BASIC: [
    PERMISSIONS.DOCUMENT_READ,
  ],
  DOCUMENT_CREATOR: [
    PERMISSIONS.DOCUMENT_READ,
    PERMISSIONS.DOCUMENT_WRITE,
    PERMISSIONS.DOCUMENT_PROCESS,
  ],
  DOCUMENT_ADMIN: [
    PERMISSIONS.DOCUMENT_READ,
    PERMISSIONS.DOCUMENT_WRITE,
    PERMISSIONS.DOCUMENT_DELETE,
    PERMISSIONS.DOCUMENT_PROCESS,
    PERMISSIONS.DOCUMENT_SHARE,
  ],
  INTEGRATION_BASIC: [
    PERMISSIONS.INTEGRATION_READ,
  ],
  INTEGRATION_ADMIN: [
    PERMISSIONS.INTEGRATION_READ,
    PERMISSIONS.INTEGRATION_WRITE,
    PERMISSIONS.INTEGRATION_DELETE,
    PERMISSIONS.INTEGRATION_CONNECT,
    PERMISSIONS.INTEGRATION_MANAGE,
  ],
  ANALYTICS_BASIC: [
    PERMISSIONS.ANALYTICS_READ,
  ],
  ANALYTICS_ADMIN: [
    PERMISSIONS.ANALYTICS_READ,
    PERMISSIONS.ANALYTICS_EXPORT,
    PERMISSIONS.ANALYTICS_MANAGE,
  ],
  SUBSCRIPTION_BASIC: [
    PERMISSIONS.SUBSCRIPTION_READ,
  ],
  SUBSCRIPTION_ADMIN: [
    PERMISSIONS.SUBSCRIPTION_READ,
    PERMISSIONS.SUBSCRIPTION_WRITE,
    PERMISSIONS.SUBSCRIPTION_MANAGE,
  ],
  ADMIN_ALL: [
    PERMISSIONS.ADMIN_USERS,
    PERMISSIONS.ADMIN_COMPANIES,
    PERMISSIONS.ADMIN_SYSTEM,
    PERMISSIONS.ADMIN_AUDIT_LOGS,
    PERMISSIONS.ADMIN_SECURITY,
  ],
} as const;

/**
 * Permissions by role
 */
export const ROLE_PERMISSIONS = {
  [ROLE_IDS.SUPER_ADMIN]: [
    // All permissions
    ...Object.values(PERMISSIONS),
  ],
  [ROLE_IDS.ADMIN]: [
    // User management
    ...PERMISSION_GROUPS.USER_MANAGEMENT,
    
    // Company admin
    ...PERMISSION_GROUPS.COMPANY_ADMIN,
    
    // Workflow admin
    ...PERMISSION_GROUPS.WORKFLOW_ADMIN,
    
    // Document admin
    ...PERMISSION_GROUPS.DOCUMENT_ADMIN,
    
    // Integration admin
    ...PERMISSION_GROUPS.INTEGRATION_ADMIN,
    
    // Subscription admin
    ...PERMISSION_GROUPS.SUBSCRIPTION_ADMIN,
    
    // Analytics admin
    ...PERMISSION_GROUPS.ANALYTICS_ADMIN,
  ],
  [ROLE_IDS.MANAGER]: [
    // User basic
    ...PERMISSION_GROUPS.USER_BASIC,
    PERMISSIONS.USER_INVITE,
    
    // Company read
    ...PERMISSION_GROUPS.COMPANY_BASIC,
    
    // Workflow admin
    ...PERMISSION_GROUPS.WORKFLOW_ADMIN,
    
    // Document admin
    ...PERMISSION_GROUPS.DOCUMENT_ADMIN,
    
    // Integration basic
    ...PERMISSION_GROUPS.INTEGRATION_BASIC,
    
    // Subscription read
    ...PERMISSION_GROUPS.SUBSCRIPTION_BASIC,
    
    // Analytics admin
    ...PERMISSION_GROUPS.ANALYTICS_ADMIN,
  ],
  [ROLE_IDS.MEMBER]: [
    // User basic
    ...PERMISSION_GROUPS.USER_BASIC,
    
    // Company read
    ...PERMISSION_GROUPS.COMPANY_BASIC,
    
    // Workflow creator
    ...PERMISSION_GROUPS.WORKFLOW_CREATOR,
    
    // Document creator
    ...PERMISSION_GROUPS.DOCUMENT_CREATOR,
    
    // Integration basic
    ...PERMISSION_GROUPS.INTEGRATION_BASIC,
    
    // Subscription read
    ...PERMISSION_GROUPS.SUBSCRIPTION_BASIC,
    
    // Analytics basic
    ...PERMISSION_GROUPS.ANALYTICS_BASIC,
  ],
  [ROLE_IDS.GUEST]: [
    // Company read
    ...PERMISSION_GROUPS.COMPANY_BASIC,
    
    // Workflow read
    PERMISSIONS.WORKFLOW_READ,
    
    // Document read
    PERMISSIONS.DOCUMENT_READ,
    
    // Analytics basic
    ...PERMISSION_GROUPS.ANALYTICS_BASIC,
  ],
} as const;

/**
 * Role hierarchy (higher number = more permissions)
 */
export const ROLE_HIERARCHY = {
  [ROLE_IDS.SUPER_ADMIN]: 100,
  [ROLE_IDS.ADMIN]: 80,
  [ROLE_IDS.MANAGER]: 60,
  [ROLE_IDS.MEMBER]: 40,
  [ROLE_IDS.GUEST]: 20,
} as const;

/**
 * Default role for new users
 */
export const DEFAULT_ROLE = ROLE_IDS.MEMBER;

/**
 * Role colors (for UI badges)
 */
export const ROLE_COLORS = {
  [ROLE_IDS.SUPER_ADMIN]: '#ef4444', // red
  [ROLE_IDS.ADMIN]: '#f59e0b', // amber
  [ROLE_IDS.MANAGER]: '#3b82f6', // blue
  [ROLE_IDS.MEMBER]: '#10b981', // green
  [ROLE_IDS.GUEST]: '#6b7280', // gray
} as const;

/**
 * Role icons (for UI)
 */
export const ROLE_ICONS = {
  [ROLE_IDS.SUPER_ADMIN]: 'shield',
  [ROLE_IDS.ADMIN]: 'crown',
  [ROLE_IDS.MANAGER]: 'users',
  [ROLE_IDS.MEMBER]: 'user',
  [ROLE_IDS.GUEST]: 'eye',
} as const;

/**
 * Roles that can manage other roles
 */
export const ROLES_CAN_MANAGE_ROLES = [
  ROLE_IDS.SUPER_ADMIN,
  ROLE_IDS.ADMIN,
] as const;

/**
 * Roles that can invite users
 */
export const ROLES_CAN_INVITE = [
  ROLE_IDS.SUPER_ADMIN,
  ROLE_IDS.ADMIN,
  ROLE_IDS.MANAGER,
] as const;

/**
 * Roles that can view audit logs
 */
export const ROLES_CAN_VIEW_AUDIT_LOGS = [
  ROLE_IDS.SUPER_ADMIN,
  ROLE_IDS.ADMIN,
] as const;

/**
 * Roles that can manage billing
 */
export const ROLES_CAN_MANAGE_BILLING = [
  ROLE_IDS.SUPER_ADMIN,
  ROLE_IDS.ADMIN,
] as const;

/**
 * Roles that can delete company
 */
export const ROLES_CAN_DELETE_COMPANY = [
  ROLE_IDS.SUPER_ADMIN,
  ROLE_IDS.ADMIN,
] as const;

/**
 * Resource ownership permissions
 */
export const RESOURCE_OWNERSHIP = {
  // Users can always read/write their own resources
  OWN_PROFILE: 'own:profile',
  OWN_WORKFLOWS: 'own:workflows',
  OWN_DOCUMENTS: 'own:documents',
  OWN_NOTIFICATIONS: 'own:notifications',
} as const;

/**
 * Special permissions that override role permissions
 */
export const SPECIAL_PERMISSIONS = {
  IMPERSONATE_USER: 'special:impersonate_user',
  BYPASS_RATE_LIMITS: 'special:bypass_rate_limits',
  ACCESS_ALL_COMPANIES: 'special:access_all_companies',
  MODIFY_AUDIT_LOGS: 'special:modify_audit_logs',
} as const;

/**
 * Helper functions
 */
export const hasPermission = (role: string, permission: string): boolean => {
  const rolePerms = ROLE_PERMISSIONS[role as keyof typeof ROLE_PERMISSIONS];
  return rolePerms?.includes(permission as any) ?? false;
};

export const hasAnyPermission = (role: string, permissions: string[]): boolean => {
  return permissions.some((permission) => hasPermission(role, permission));
};

export const hasAllPermissions = (role: string, permissions: string[]): boolean => {
  return permissions.every((permission) => hasPermission(role, permission));
};

export const canManageRole = (userRole: string, targetRole: string): boolean => {
  const userLevel = ROLE_HIERARCHY[userRole as keyof typeof ROLE_HIERARCHY] ?? 0;
  const targetLevel = ROLE_HIERARCHY[targetRole as keyof typeof ROLE_HIERARCHY] ?? 0;
  return userLevel > targetLevel;
};

export const getRoleLevel = (role: string): number => {
  return ROLE_HIERARCHY[role as keyof typeof ROLE_HIERARCHY] ?? 0;
};

export const isHigherRole = (role1: string, role2: string): boolean => {
  return getRoleLevel(role1) > getRoleLevel(role2);
};

export const getAvailableRoles = (currentRole: string): string[] => {
  const currentLevel = getRoleLevel(currentRole);
  return Object.entries(ROLE_HIERARCHY)
    .filter(([_, level]) => level < currentLevel)
    .map(([role]) => role);
};

export const getPermissionsByCategory = (category: string): string[] => {
  return Object.values(PERMISSIONS).filter((permission) =>
    permission.startsWith(`${category}:`)
  );
};

/**
 * Role assignment rules
 */
export const ROLE_ASSIGNMENT_RULES = {
  // Super admin can only be assigned by platform
  [ROLE_IDS.SUPER_ADMIN]: {
    canBeAssignedBy: [],
    requiresApproval: true,
    maxPerCompany: 0, // Platform level only
  },
  
  // Admin can be assigned by super admin
  [ROLE_IDS.ADMIN]: {
    canBeAssignedBy: [ROLE_IDS.SUPER_ADMIN],
    requiresApproval: false,
    maxPerCompany: -1, // Unlimited
  },
  
  // Manager can be assigned by admin+
  [ROLE_IDS.MANAGER]: {
    canBeAssignedBy: [ROLE_IDS.SUPER_ADMIN, ROLE_IDS.ADMIN],
    requiresApproval: false,
    maxPerCompany: -1, // Unlimited
  },
  
  // Member can be assigned by manager+
  [ROLE_IDS.MEMBER]: {
    canBeAssignedBy: [ROLE_IDS.SUPER_ADMIN, ROLE_IDS.ADMIN, ROLE_IDS.MANAGER],
    requiresApproval: false,
    maxPerCompany: -1, // Unlimited
  },
  
  // Guest can be assigned by manager+
  [ROLE_IDS.GUEST]: {
    canBeAssignedBy: [ROLE_IDS.SUPER_ADMIN, ROLE_IDS.ADMIN, ROLE_IDS.MANAGER],
    requiresApproval: false,
    maxPerCompany: -1, // Unlimited
  },
} as const;

/**
 * Permission metadata
 */
export const PERMISSION_METADATA = {
  [PERMISSIONS.USER_DELETE]: {
    dangerous: true,
    requiresConfirmation: true,
    auditLog: true,
  },
  [PERMISSIONS.COMPANY_DELETE]: {
    dangerous: true,
    requiresConfirmation: true,
    auditLog: true,
  },
  [PERMISSIONS.WORKFLOW_DELETE]: {
    dangerous: true,
    requiresConfirmation: true,
    auditLog: true,
  },
  [PERMISSIONS.DOCUMENT_DELETE]: {
    dangerous: true,
    requiresConfirmation: true,
    auditLog: true,
  },
  [PERMISSIONS.INTEGRATION_DELETE]: {
    dangerous: true,
    requiresConfirmation: true,
    auditLog: true,
  },
  [PERMISSIONS.ADMIN_SYSTEM]: {
    dangerous: true,
    requiresConfirmation: false,
    auditLog: true,
  },
} as const;