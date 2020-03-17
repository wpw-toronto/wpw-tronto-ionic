
// Data interface model for schedule(event, performance)
export interface ModelSchedule {
  id: string;
  time_start: string;
  time_end: string;
  title: string;
  subitem: [string];
};