import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lxmmoaizttxcuzdsmnox.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bW1vYWl6dHR4Y3V6ZHNtbm94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MzA4MzMsImV4cCI6MjAzNjAwNjgzM30.GxqRcYsMRdE0xd5eQAe5hzfYM780gbo8VTPMeI6u2Ns';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);