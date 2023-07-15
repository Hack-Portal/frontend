export type Hackathon = {
  hackathon_id: number;
  name: string;
  icon: {
    String: string;
    Valid: boolean;
  };
  roomicon: {
    String: string;
    Valid: boolean;
  };
  description: string;
  link: string;
  expired: string;
  start_date: string;
  term: number;
  HackathonStatusTag: HackathonStatusTag[];
};

type HackathonStatusTag = {
  status_id: number;
  status: string;
};