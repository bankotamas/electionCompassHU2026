const SUPABASE_URL = "https://YOURPROJECT.supabase.co"
const SUPABASE_KEY = "PUBLIC_KEY"

const supabaseClient = supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
)

async function saveResult(party){

await supabaseClient
.from("results")
.insert([{party:party}])

}

async function loadStats(){

const {data} = await supabaseClient
.from("results")
.select("party")

const stats={}

data.forEach(r=>{

stats[r.party]=(stats[r.party]||0)+1

})

return stats

}
