export interface Observation {
    _id: string
    title: string
    claUnit: number
    date: string
    text: string
    createdAt: string
    updatedAt: string
}

export interface NewObservation extends Omit<Observation, 'createdAt' | 'updatedAt'> {
    createdAt?: string
    updatedAt?: string
}

export const observationDefaults = (): Observation => ({
    _id: '',
    title: '',
    claUnit: 1,
    date: '',
    text: '',
    createdAt: '',
    updatedAt: '',
});

export interface ObservationHelper {
  set(observation: Observation, data: Partial<Observation>): Observation
}
export const observationHelper = {
  /**
   * Creates an updated Observation object
   */
  set(observation: Observation, data: Partial<Observation>): Observation {
    return {
      ...observation,
      ...data,
    };
  },
};
