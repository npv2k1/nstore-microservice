import { getCurrentTimestamp } from '@/utils/time';
import moment from 'moment';
describe('getCurrentTimestamp', () => {
  it('returns the current timestamp in UTC', () => {
    const timestamp = getCurrentTimestamp();
    const now = moment().utc(true).unix();
    expect(timestamp).toBe(now);
  });
});
