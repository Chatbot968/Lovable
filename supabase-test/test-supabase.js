const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://hgqndkfkuitafuzawuxl.supabase.co";
const supabaseKey = "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhncW5ka2ZrdWl0YWZ1emF3dXhsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzkzNDg5MiwiZXhwIjoyMDYzNTEwODkyfQ.BexhC9LB-7Aea67mUPQI1OMVIZonH7-Z5EOOzq7GHDY";
const supabase = createClient(supabaseUrl, supabaseKey);

(async () => {
  const { data, error } = await supabase
    .from("Config_client")
    .select("*");
  console.log("DATA:", data);
  console.log("ERROR:", error);
})();