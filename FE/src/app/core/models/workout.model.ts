import {Guid} from "guid-typescript";

interface IWorkoutModel {
    workoutId: string
    personId: Guid
    muscleType: string
    workoutTime_Weights: string
    workoutTime_Cardio: string
    workoutDifficulty: string
    workoutDay: string
}
export default IWorkoutModel
