import { Observation as ObservationInterface, observationDefaults } from '../observation';

/**
 * Plain text notes that a user wants to make about anything.  These are not connected to anything else in the app.
 */
export class Observation implements ObservationInterface {

  /**
   * Unique ID for the Observation
   */
  _id: string;

  /**
   * Title of the Observation
   */
  title: string;

  /**
   * User's overall CLA unit at the time of the observation.  Updated when the observation is edited.
   */
  claUnit: number;

  /**
   * Date/time the Observation was created, as an ISO Date string (e.g., '2022-06-20T15:50:40.055Z')
   */
  date: string;

  /**
   * Text of the Observation
   */
  text: string;

  /**
   * Creates an Observation object
   */
  constructor(data?: ObservationInterface) {
    const defaults = observationDefaults();
    this._id = data?._id || defaults._id;
    this.title = data?.title || defaults.title;
    this.claUnit = data?.claUnit || defaults.claUnit;
    this.date = data?.date || defaults.date;
    this.text = data?.text || defaults.text;
  }

  /**
   * Creates an updated Observation object
   */
  set(data: Partial<ObservationInterface>) {
    return new Observation({
      ...this,
      ...data,
    });
  }

}
