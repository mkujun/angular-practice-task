import { ReadingList } from "../reading-list.model";

export class AddReadingList {
  static readonly type='[ReadingList] AddReadingList';
  constructor(public payload: ReadingList) { }
}

export class UpdateReadingList {
  static readonly type='[ReadingList] UpdateReadingList';
  constructor(public payload: {
    readingList: ReadingList,
    index: number
  }) {}
}

export class DeleteReadingList {
  static readonly type='[ReadingList] DeleteReadingList';
  constructor(public payload: ReadingList){}
}
