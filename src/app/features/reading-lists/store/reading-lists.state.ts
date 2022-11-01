import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ReadingList } from "../reading-list.model";
import { AddReadingList, DeleteReadingList, UpdateReadingList } from "./reading-lists.actions";

export interface ReadingListsModel {
  readingLists: ReadingList[];
}

@State<ReadingListsModel>({
  name: 'readingList',
  defaults: {
    readingLists: []
  }
})

@Injectable()
export class ReadingListState {

  @Action(AddReadingList)
  addReadingList(context: StateContext<ReadingListsModel>, action: AddReadingList) {

    const state = context.getState();

    context.setState({
      readingLists: [...state.readingLists, action.payload]
    });
  }

  @Action(UpdateReadingList)
  updateReadingList(context: StateContext<ReadingListsModel>, action: UpdateReadingList) {
    const state = context.getState();

    const updatedReadingLists = [...state.readingLists];
    updatedReadingLists[action.payload.index] = action.payload.readingList;

    context.setState({
      ...state,
      readingLists: updatedReadingLists
    })
  }

  @Action(DeleteReadingList)
  deleteReadingList(context: StateContext<ReadingListsModel>, action: DeleteReadingList) {
    const state = context.getState();
    const filteredArray = state.readingLists.filter(rl => rl !== action.payload);

    context.setState({
      ...state,
      readingLists: filteredArray
    })
  }

  @Selector()
  static getReadingLists(state: ReadingListsModel) {
    return state.readingLists;
  }
}
