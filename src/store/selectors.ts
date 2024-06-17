import { createSelector } from "@reduxjs/toolkit";
import { State } from "../types";
import { AppSlice } from "./app-slice";
import { NameSpace } from "../const/const";


export const getUserId = createSelector(
    (state: Pick<State, NameSpace.appSlice>) => state[NameSpace.appSlice],
    (state: AppSlice) => state.userId
  );
