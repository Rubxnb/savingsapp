import { supabase } from './client';

export const insertMovement = async (movement) => {

  const { data, error } = await supabase
    .from('bankMovements')
    .insert(movement);

  if (error) {
    return error;
  }

  return data;
};