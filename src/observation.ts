/**
 * Plain text notes that a user wants to make about anything. These are not connected to anything else in the app.
 */
export interface Observation {
    /** Unique ID for the Observation */
    _id: string
    /** Title of the Observation */
    title: string
    /** User's overall 1-based CLA unit at the time of the observation. Updated when the observation is edited. */
    claUnit: number
    /** Date/time the Observation was created, as an ISO Date string (e.g., '2022-06-20T15:50:40.055Z') */
    date: string
    /** Text of the Observation */
    text: string
    /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database */
    createdAt: string
    /** ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database */
    updatedAt: string
}

/**
 * NewObservation is Observation with createdAt and updatedAt optional.
 * The intention is, If not provided, they will be set by the database when the row is created/updated in the database.
 */
export interface NewObservation extends Omit<Observation, 'createdAt' | 'updatedAt'> {
    /**
     * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was initially saved to the database.
     * If not provided, it should be set when the row is created in the database.
     */
    createdAt?: string
    /**
     * ISO Date (e.g., '2022-06-20T15:50:40.055Z'), when the row was last updated in the database.
     * If not provided, it should be set when the row is updated in the database.
     */
    updatedAt?: string
}

/** Returns a new Observation object with default values */
export const observationDefaults = (): Observation => ({
    _id: '',
    title: '',
    claUnit: 1,
    date: '',
    text: '',
    createdAt: '',
    updatedAt: '',
});

/** Interface defining helper methods for Observation */
export interface ObservationHelper {
  set(observation: Observation, data: Partial<Observation>): Observation
}
/** Object with helper methods for Observation */
export const observationHelper: ObservationHelper = {
  /** Creates an updated Observation object by merging an existing Observation object with new values */
  set(observation: Observation, data: Partial<Observation>): Observation {
    return {
      ...observation,
      ...data,
    };
  },
};
