export type NotificationType = 'order' | 'message' | 'payment' | 'review' | 'system' | 'offer';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  timestamp: string;
  isRead: boolean;
  sender?: {
    name: string;
    image: string;
  };
  actionUrl?: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Activity {
  id: string;
  type: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
}
