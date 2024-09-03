import IWorkoutModel from './workout.model';
import { Guid } from 'guid-typescript';

export interface IProfileModel {
  personId: Guid;
  personName: string;
  personAge: string;
  personGender: string;
  workouts: IWorkoutModel[];
  personIdentity: string;
}

export interface IProfileEditModel {
  personName: string;
  personAge: string;
  personGender: string;
  workouts: IWorkoutModel[];
  personIdentity: string;
}
