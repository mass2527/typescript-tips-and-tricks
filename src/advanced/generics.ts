export enum TaskType {
  feature = "feature",
  bug = "bug",
}

type Task<T = TaskType> = {
  name: string;
  type: T;
};

const whatever: Task = { name: "this is whatever", type: TaskType.feature };
whatever.type = TaskType.bug;

type FeatureTask = Task<TaskType.feature>;

const feature: FeatureTask = {
  name: "this is feature task",
  type: TaskType.feature,
};

// // Invalid type for feature
feature.type = TaskType.bug;

const invalid: FeatureTask = { name: "this is invalid", type: TaskType.bug };
