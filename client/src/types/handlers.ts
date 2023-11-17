import type { Dispatch, SetStateAction, ChangeEvent } from "react";

export type StateDispatchAction<T> = Dispatch<SetStateAction<T>>

export type MessageChangeEvent = ChangeEvent<HTMLTextAreaElement>