import { Delete, Get, Post, Put } from '../privateServices';

export const getNote = async (id: string) => {
  const response = await Get(`/notes/show/${id}`);
  return response;
};

export const getNotes = async () => {
  const response = await Get('/notes/showall');
  return response;
};

export const createNote = async (body: any) => {
  const response = await Post('/notes/create', body);
  return response;
};

export const updateNote = async (id: string, body: any) => {
  const response = await Put(`/notes/update/${id}`, body);
  return response;
};

export const deleteNote = async (id: string) => {
  const response = await Delete(`/notes/delete/${id}`);
  return response;
};
