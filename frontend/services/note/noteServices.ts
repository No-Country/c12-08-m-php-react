import { NoteData } from '@/types/types';
import { Delete, Get, Post, Put } from '../privateServices';

export const getNote = async (id: number | string) => {
  const response = await Get(`/notes/${id}`);
  return response;
};

export const getNotes = async () => {
  const response = await Get('/notes');
  return response.data;
};

export const createNote = async (body: NoteData) => {
  const response = await Post('/notes/create', body);
  return response.data;
};

export const updateNote = async (id: number | string, body: NoteData) => {
  const response = await Put(`/notes/update/${id}`, body);
  return response.data;
};

export const deleteNote = async (id: number | string) => {
  const response = await Delete(`/notes/delete/${id}`);
  return response.data;
};
