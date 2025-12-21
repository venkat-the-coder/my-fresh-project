export interface Category {
  id: string;
  name: string;
  color: string;
}

export const CATEGORIES: Category[] = [
  { id: 'work', name: 'Work', color: '#3b82f6' },
  { id: 'personal', name: 'Personal', color: '#10b981' },
  { id: 'shopping', name: 'Shopping', color: '#f59e0b' },
  { id: 'health', name: 'Health', color: '#ef4444' },
  { id: 'other', name: 'Other', color: '#8b5cf6' }
];
