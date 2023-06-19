interface MediaUrls {
    attachments: object;
}

export interface MessagesData {
  attachments?: MediaUrls[];
  author: string;
  channel: string;
  content: string;
  date: string;
  id: string;
  region: string;
  senderNumber: string;
}
