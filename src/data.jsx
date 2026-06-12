// All recipe, allergen, grocery, snack and week data.
// Edit content here. App.jsx contains only UI.

const ALLERGENS = ["Egg","Peanut","Fish","Wheat","Tree Nuts","Soy","Sesame","Dairy","Shellfish","Molluscs"];
const COLORS = {"Egg":"#f59e0b","Peanut":"#92400e","Fish":"#0ea5e9","Wheat":"#d97706","Tree Nuts":"#16a34a","Soy":"#7c3aed","Sesame":"#dc2626","Dairy":"#6366f1","Shellfish":"#db2777","Molluscs":"#0d9488"};
const NUTR_COLORS = {"Iron":"#dc2626","Zinc":"#7c3aed","Omega-3":"#0ea5e9","Vitamin C":"#f59e0b","Protein":"#16a34a","Healthy Fats":"#0d9488","Calcium":"#6366f1","Fibre":"#92400e"};

const WEEKS = [
  {
    title:"Week 1", nutritionFocus:"Iron & Omega-3 Foundation",
    nutritionNote:"Front-loads iron and omega-3. Vitamin C pairings at every meal maximise iron absorption. Two oily fish meals support brain development.",
    babyPortionNote:"Each meal is scaled for 2 adults + baby across 2 nights. Offer 2–3 tbsp of each food group per meal. Still primarily on breast milk or formula (600–900ml/day). Target 7mg iron/day from food.",
    meals:[
      {
        day:"Tuesday", meal:"Sheet Pan Salmon & Lentil Tray with Roasted Red Pepper",
        allergens:["Fish","Dairy"], nutrition:["Omega-3","Iron","Vitamin C","Protein","Calcium"],
        nutritionNotes:"Salmon = omega-3 DHA for brain. Lentils = plant iron. Red pepper = vitamin C which doubles iron absorption from lentils. Cream cheese adds calcium and healthy fats.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"30 min",
          ingredients:["4 salmon fillets (150g each)","2 tins (400g) green lentils, drained","4 red peppers, deseeded and sliced","2 tbsp Dijon mustard","2 tbsp olive oil (split use)","½ tsp garlic powder","½ tsp onion powder","1 tsp dried thyme","100g full-fat cream cheese (for baby)","60g butter"],
          steps:["Preheat oven to 200°C. Spread lentils in a baking dish, mix with dried thyme, garlic powder and a splash of water.","Lay pepper slices around lentils. Drizzle with 1 tbsp olive oil.","Mix Dijon mustard, garlic powder, onion powder and 1 tbsp olive oil into a glaze. Brush over salmon fillets.","Nestle salmon on top of lentils and peppers. Bake 25 mins until salmon flakes and peppers are soft.","BABY: Mash lentils and soft pepper together with cream cheese. Flake salmon very finely — feel for pin bones. Vitamin C in peppers boosts iron from lentils.","ADULTS: Season with salt and pepper. Serve from the dish."]
        }
      },
      {
        day:"Thursday", meal:"Baked Beef & Spinach Meatballs in Tomato Sauce with Pasta",
        allergens:["Wheat","Egg","Dairy"], nutrition:["Iron","Zinc","Vitamin C","Protein","Calcium"],
        nutritionNotes:"Beef = highly bioavailable haem iron + zinc. Spinach = non-haem iron. Tomato sauce = vitamin C to boost all iron absorption. Egg adds extra iron. Parmesan adds calcium.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"25 min",
          ingredients:["800g lean beef mince","200g baby spinach, very finely chopped","2 eggs","60g breadcrumbs","1 tsp dried oregano","1 tsp dried basil","½ tsp smoked paprika","½ tsp garlic powder","4 tins (400g each) chopped tomatoes","400g pasta","80g parmesan, grated"],
          steps:["Preheat oven to 200°C. Mix mince, spinach, egg, breadcrumbs and garlic. Form 18 small meatballs.","Place in a large baking dish. Pour tomatoes around. Bake 25 mins.","Cook pasta per packet.","BABY: Remove 3–4 meatballs, cut in half to confirm cooked, then chop finely. Mix with tomato sauce (vitamin C) and soft pasta cut into small pieces. Grate parmesan on top.","ADULTS: Toss pasta with sauce, add parmesan and serve meatballs on top."]
        }
      },
      {
        day:"Sunday", meal:"Baked Peanut Butter Chicken with Sweet Potato & Steamed Kale",
        allergens:["Peanut","Soy","Sesame"], nutrition:["Iron","Vitamin C","Healthy Fats","Zinc","Protein"],
        nutritionNotes:"Sweet potato = beta-carotene + vitamin C. Kale = iron + calcium + vitamin C. Peanut butter = healthy fats + zinc. Chicken = zinc + protein.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"190°C / 375°F", time:"40 min",
          ingredients:["4 chicken breasts","6 tbsp smooth peanut butter (no added salt/sugar)","4 tbsp low-sodium soy sauce","2 tbsp sesame oil","1 tsp ginger powder","300ml low-sodium chicken stock","4 medium sweet potatoes, peeled and cubed","300g kale, stems removed"],
          steps:["Preheat oven to 190°C. Whisk peanut butter, soy sauce, sesame oil and stock into a sauce.","Place chicken in a baking dish, pour half the sauce over. Add sweet potato cubes around.","Bake 35–38 mins. Steam kale 5 mins.","BABY: Mash sweet potato smooth. Shred chicken very finely. Finely chop kale. Vitamin C in sweet potato and kale boost iron from chicken and peanut butter.","ADULTS: Slice chicken, serve over sweet potato with kale and remaining sauce."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Form meatballs (Thursday)",detail:"Mix beef, spinach, egg, breadcrumbs and garlic. Roll into 18 balls. Store on a covered plate in the fridge — goes straight into baking dish Thursday."},
      {step:"2",title:"Make peanut sauce (Sunday)",detail:"Whisk peanut butter, soy sauce, sesame oil and stock. Store in a jar in the fridge."},
      {step:"3",title:"Cube sweet potatoes",detail:"Peel and cube into 2cm pieces. Store in a ziplock bag in the fridge."},
      {step:"4",title:"Slice red peppers",detail:"Deseed and slice. Store in a ziplock bag — keeps until Tuesday."},
      {step:"5",title:"Cook and bag pasta",detail:"Cook large batch. Cool, toss in olive oil. Bag into portions. Fridge or freeze."},
      {step:"6",title:"Drain and bag lentils",detail:"Drain, rinse and bag lentils. Store in fridge."}
    ],
    textures:["Salmon: flake very finely, run fingertips through to feel for pin bones every time.","Lentils: mash a few and mix with cream cheese for a smooth spoonable texture.","Red pepper: peel off any skin after roasting — the skin can be a choking texture for baby.","Meatballs: always cut in half to check cooked through, then chop finely or squash.","Kale: steam until completely wilted. Chop very finely — fibrous if undercooked.","Sweet potato: mash until completely lump-free. Add butter or full-fat milk to loosen."],
    allergenCoverage:{hit:["Fish","Dairy","Wheat","Egg","Peanut","Soy","Sesame"],skipped:["Tree Nuts"]}
  },
  {
    title:"Week 2", nutritionFocus:"Zinc, Calcium & Healthy Fats",
    nutritionNote:"Targets zinc for growth and immunity, calcium for bone development, and healthy fats from oily fish and nuts. Vitamin C pairings maintained throughout.",
    babyPortionNote:"Pair iron-rich food with vitamin C at every meal. Baby's gut absorbs haem iron (meat/fish) much more efficiently than plant iron — prioritise meat/fish as the iron source when possible.",
    meals:[
      {
        day:"Tuesday", meal:"Baked Trout with Roasted Butternut Squash & Quinoa",
        allergens:["Fish","Sesame"], nutrition:["Omega-3","Iron","Zinc","Vitamin C","Healthy Fats","Protein"],
        nutritionNotes:"Trout = excellent omega-3 DHA, widely available and mild in flavour. Quinoa = complete protein + iron + zinc. Butternut squash = vitamin C + beta-carotene. Tahini drizzle = calcium + healthy fats.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"220°C / 425°F", time:"50 min",
          ingredients:["4 trout fillets","1 large butternut squash","400g quinoa","800ml low-sodium veg stock","1 tsp dried thyme","4 tbsp tahini","Juice of 1 lemon (adults only)","2 tbsp olive oil"],
          steps:["Prick the whole squash a few times with a knife and microwave 3–4 mins to soften — this makes it far easier to peel and cut, and speeds roasting. Peel, deseed and cut into 1.5–2cm cubes.","Preheat oven to 220°C. Toss squash in olive oil and thyme. Roast 30–35 mins, turning once, until fork-tender and caramelised at the edges.","Meanwhile cook quinoa in stock 15 mins until absorbed. Fluff with a fork.","Push squash to the sides of the tray. Lay trout fillets in the centre. Bake a further 12–15 mins until trout flakes easily.","Thin tahini with 2 tbsp water into a drizzle.","BABY: Flake trout very carefully — it has fine bones, check thoroughly. Mash squash smooth. Mix with quinoa and a drizzle of tahini. Squash provides vitamin C to boost quinoa iron.","ADULTS: Serve over quinoa. Mix tahini with lemon juice and drizzle over."]
        }
      },
      {
        day:"Thursday", meal:"Sheet-Pan Garlic Prawns with Chickpeas, Roasted Tomatoes & Feta",
        allergens:["Shellfish","Dairy"], nutrition:["Zinc","Iron","Vitamin C","Protein","Calcium","Fibre"],
        nutritionNotes:"First shellfish introduction. Prawns = zinc + B12 + lean protein. Chickpeas = plant iron + zinc + fibre. Tomatoes = high vitamin C to boost chickpea iron. Feta = calcium. Shellfish is the only new allergen this meal, so any reaction is easy to pin down.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"220°C / 425°F", time:"30 min",
          ingredients:["400g raw prawns, peeled and deveined (tails off, no added salt)","2 tins (400g) chickpeas, drained","600g cherry tomatoes","4 cloves garlic, sliced","2 tbsp olive oil","160g feta, crumbled","½ tsp smoked paprika (adults only)","Juice of ½ lemon (adults only)"],
          steps:["Preheat oven to 220°C. Toss chickpeas, tomatoes, garlic and olive oil in a baking dish. Roast 20 mins, until the tomatoes burst and the chickpeas are hot through.","Pat the prawns dry and scatter them over the tray. Roast a further 6–8 mins, until the prawns are pink, opaque and curled and reach 63°C / 145°F. Don't overcook or they go rubbery.","BABY: Reserve a few prawns and some chickpea-tomato mixture before the adults' lemon and paprika. Squash each chickpea flat. Remove any tail, shell or dark vein from the prawns, then finely mince the prawn meat and mash it through the chickpeas and soft tomato so there are no whole pieces — prawns are a top choking hazard. Stir in a little crumbled feta. Tomato vitamin C boosts the chickpea iron. First shellfish: offer a small amount early in the day and watch baby for any reaction.","ADULTS: Squeeze over lemon, dust with smoked paprika and extra feta. Serve as is or with flatbread."]
        }
      },
      {
        day:"Sunday", meal:"Baked Walnut & Cashew Crusted Chicken with Broccoli & Brown Rice",
        allergens:["Tree Nuts","Soy","Sesame","Egg"], nutrition:["Iron","Zinc","Healthy Fats","Vitamin C","Protein","Calcium"],
        nutritionNotes:"Chicken = zinc + protein. Walnut + cashew crust = zinc + healthy fats + iron. Broccoli = vitamin C + iron + calcium. Egg wash binds crust. Brown rice = zinc + fibre.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"30 min",
          ingredients:["4 chicken breasts","100g walnuts, finely ground","100g cashews, finely ground","2 eggs, beaten (for coating)","2 tbsp sesame oil","2 tbsp low-sodium soy sauce","1 tsp dried rosemary, finely chopped","400g broccoli florets","600g brown rice, cooked","2 tbsp olive oil"],
          steps:["Preheat oven to 200°C. Mix ground nuts with soy sauce, sesame oil and rosemary into a paste.","Dip chicken breasts in beaten egg then press nut crust firmly on top.","Place on a lined tray with broccoli tossed in olive oil around the chicken.","Bake 28–30 mins until chicken is cooked through (75°C / 165°F) and crust is golden. If the crust browns too fast, tent loosely with foil for the last 10 mins.","BABY: Reserve a small piece of uncrusted chicken — bake plain alongside. Shred very finely. For the crust, ensure nuts are ground to fine powder — mix a small amount into baby's rice as a topping. Cut broccoli into tiny soft pieces. Vitamin C in broccoli boosts iron from chicken and rice.","ADULTS: Slice chicken and serve over brown rice with broccoli."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Grind nuts (Sunday)",detail:"Pulse walnuts and cashews to fine powder separately. Store in jars. Use as baby topping all week for zinc and healthy fats."},
      {step:"2",title:"Cook brown rice",detail:"Cook large batch. Cool completely. Bag into portions. Fridge or freeze."},
      {step:"3",title:"Hard boil 3 eggs",detail:"Boil 10 mins. Cool, peel, store in fridge. Grate over baby meals all week as an easy iron boost."},
      {step:"4",title:"Drain chickpeas & thaw prawns (Thursday)",detail:"Drain, rinse and pat the chickpeas dry; bag ready for Thursday. If using frozen prawns, move them to the fridge to thaw overnight and keep cold — pat dry before they go in the oven."},
      {step:"5",title:"Cube butternut squash",detail:"Peel and cube 2cm. Store in ziplock bag in fridge."},
      {step:"6",title:"Cook quinoa",detail:"Cook in stock. Cool and bag into portions for Tuesday dinner and Wednesday leftover."}
    ],
    textures:["Trout (Tuesday): similar to salmon — flake carefully and feel every piece for fine bones before serving.","Quinoa: tiny grains — mix well into mashed food so it doesn't sit loose.","Butternut squash: mash completely smooth after roasting.","Chickpeas: MUST be squashed flat between fingers — whole chickpeas are a choking hazard.","Prawns (Thursday): cook fully to opaque / 63°C / 145°F, remove tail, shell and vein, then finely mince and mash through the chickpeas — never serve whole or in rounds (top choking hazard). First shellfish: start with a small amount and watch for a reaction.","Nut crust (Sunday): grind walnuts and cashews to fine powder for baby — no visible chunks. Mix into rice as a topping rather than serving the crust directly.","Broccoli: roast or steam until completely fork-tender. Cut into pieces no larger than 1cm."],
    allergenCoverage:{hit:["Fish","Sesame","Dairy","Egg","Tree Nuts","Soy","Shellfish"],skipped:["Peanut","Wheat","Molluscs"]}
  },
  {
    title:"Week 3", nutritionFocus:"Triple Iron Sources Per Meal",
    nutritionNote:"Every meal has at least two iron sources combined with a vitamin C food. Fibre-rich legumes and wholegrains support gut development. Oily fish maintains omega-3 levels.",
    babyPortionNote:"Highest iron week. Always pair iron foods with vitamin C — it can increase absorption by up to 3x. If baby has been showing low energy, this week's meals are especially important.",
    meals:[
      {
        day:"Tuesday", meal:"Baked Lamb & Lentil One-Pan with Roasted Courgette & Yoghurt",
        allergens:["Dairy","Wheat"], nutrition:["Iron","Zinc","Protein","Vitamin C","Calcium","Healthy Fats"],
        nutritionNotes:"Lamb = highest zinc of any common meat + very high haem iron. Lentils = iron + fibre. Courgette = vitamin C. Full-fat yoghurt = calcium + probiotics for gut health.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"190°C / 375°F", time:"45 min",
          ingredients:["800g lamb mince","2 tins (400g) green lentils, drained","4 courgettes, sliced into half moons","2 tins (400g) chopped tomatoes","1 tsp dried rosemary, finely chopped","1 tsp dried thyme","½ tsp garlic powder","300g full-fat plain yoghurt","Pitta bread (adults)"],
          steps:["Preheat oven to 190°C. Brown lamb in oven-proof pan 3 mins. Drain excess fat.","Add lentils, tomatoes, rosemary, thyme and garlic. Stir. Arrange courgette on top.","Transfer to oven. Bake uncovered 40 mins.","BABY: Scoop lamb and lentil mixture, mash lightly. No large chunks. Add a spoonful of plain yoghurt for calcium. Courgette provides vitamin C to boost iron from lamb and lentils.","ADULTS: Serve with pitta and mint yoghurt."]
        }
      },
      {
        day:"Thursday", meal:"Japanese Beef & Shiitake Mushroom Bake with Brown Rice",
        allergens:["Soy","Wheat","Sesame","Tree Nuts"], nutrition:["Iron","Zinc","Vitamin C","Protein","Fibre"],
        nutritionNotes:"Beef = haem iron + zinc. Shiitake mushrooms add umami depth and B vitamins. Spinach = plant iron. Tomato = vitamin C to boost all iron sources. Ground sesame and cashew add calcium, zinc and healthy fats.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"190°C / 375°F", time:"40 min",
          ingredients:["800g lean beef mince","200g shiitake mushrooms, finely sliced","200g baby spinach, chopped","2 tins (400g) chopped tomatoes","2 tbsp low-sodium soy sauce","1 tbsp mirin","1 tsp ginger powder","½ tsp garlic powder","600g brown rice, cooked","1 tbsp sesame seeds, ground","2 tbsp cashews, finely ground (for baby topping)"],
          steps:["Preheat oven to 190°C. Brown beef mince 3 mins on the hob, drain excess fat.","Mix in shiitake, spinach, tomatoes, ginger and garlic. Reserve baby's portion into a small ovenproof dish now, before the soy sauce goes in.","Stir soy sauce and mirin into the adult portion. Transfer the adult portion to a baking dish and place baby's small dish alongside. Bake both 35 mins, until the beef is piping hot and cooked through (71°C / 160°F — no pink).","BABY: Take baby's baked portion and mash lightly — mushrooms finely chopped, spinach soft. Confirm the mince is fully cooked through with no pink, then serve over soft brown rice with a sprinkle of ground sesame and ground cashew. Tomato vitamin C boosts iron from beef and spinach.","ADULTS: Serve over brown rice."]
        }
      },
      {
        day:"Sunday", meal:"Baked Teriyaki Chicken with Edamame, Broccoli & Soba Noodles",
        allergens:["Soy","Wheat","Sesame","Egg"], nutrition:["Iron","Zinc","Protein","Vitamin C","Healthy Fats","Fibre"],
        nutritionNotes:"Edamame = iron + zinc + plant protein. Soba noodles = iron + wholegrains. Broccoli = vitamin C + iron. Egg boosts iron further.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"190°C / 375°F", time:"40 min",
          ingredients:["4 chicken breasts","6 tbsp low-sodium soy sauce","2 tbsp sesame oil","1 tsp ginger powder","2 tbsp maple syrup (adults only)","400g frozen edamame, defrosted","400g broccoli florets","400g soba noodles","4 eggs, soft scrambled"],
          steps:["Mix soy sauce and sesame oil. Reserve 2 tbsp for baby before adding maple syrup. Marinate chicken.","Preheat oven to 190°C. Bake chicken 30–35 mins. Add broccoli for last 15 mins.","Cook soba noodles 5 mins. Soft scramble eggs separately.","BABY: Shred chicken very finely. Press each edamame bean flat — never whole. Cut broccoli into tiny soft pieces. Cut noodles into 2cm pieces. Top with scrambled egg crumbles. Broccoli vitamin C boosts iron from edamame and noodles.","ADULTS: Toss noodles in teriyaki sauce. Serve chicken sliced over with broccoli and edamame."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Brown lamb mince (Tuesday)",detail:"Brown lamb 3 mins on hob. Cool and store in fridge. On Tuesday just tip into baking dish with lentils and tomatoes — saves the hob step on a weeknight."},
      {step:"2",title:"Marinate chicken (Sunday)",detail:"Make teriyaki sauce, reserve baby portion, coat chicken. Store in sealed bag in fridge — goes straight in oven Sunday."},
      {step:"3",title:"Defrost edamame",detail:"Move from freezer to fridge Monday evening so it's ready for Sunday."},
      {step:"4",title:"Cook soba noodles",detail:"Cook, rinse in cold water, toss in tiny bit of sesame oil. Bag in portions. Cut baby portion into 2cm pieces before bagging."},
      {step:"5",title:"Pre-grind sesame & cashew",detail:"Grind sesame seeds and a small amount of cashew to fine powder. Store in small jars. Sprinkle over baby's meals all week for calcium, zinc and healthy fats."},
      {step:"6",title:"Slice shiitake (Thursday)",detail:"Finely slice shiitake mushrooms for the beef bake. Store in a tub in the fridge ready for Thursday."}
    ],
    textures:["Lamb mince: ensure no large clumps. Mash lightly into lentils.","Beef & shiitake bake: chop shiitake mushrooms very finely — they can be chewy. Mash beef and spinach soft. Ground cashew on top must be fine powder, no chunks.","Edamame: ALWAYS press flat between fingers — never serve whole.","Soba noodles (Sunday): cut into 2cm pieces — never serve long noodles to baby.","Yoghurt: plain full-fat only — no added sugar. Fat content supports brain development.","Broccoli: must be very soft. Microwave with splash of water 1–2 mins if not tender enough."],
    allergenCoverage:{hit:["Dairy","Wheat","Egg","Sesame","Soy","Tree Nuts"],skipped:["Peanut","Fish"]}
  },
  {
    title:"Week 4", nutritionFocus:"Brain Development & Immune Support",
    nutritionNote:"Focuses on DHA for brain development (oily fish twice), vitamin A and C rich veg for immune function, and zinc for growth. Iron maintained throughout with vitamin C pairings.",
    babyPortionNote:"By week 4 baby should be comfortable with a range of textures. You can progress slightly — less mashing is fine if baby is tolerating well. Always supervise mealtimes.",
    meals:[
      {
        day:"Tuesday", meal:"Miso Salmon Sheet Pan with Roasted Carrots & Edamame",
        allergens:["Fish","Soy","Sesame"], nutrition:["Omega-3","Iron","Zinc","Vitamin C","Healthy Fats","Protein"],
        nutritionNotes:"Salmon = omega-3 DHA + protein + iron. White miso adds umami and gut-friendly fermentation. Carrots = beta-carotene + vitamin C. Edamame = plant iron + zinc. Sesame adds calcium.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"220°C / 425°F", time:"20 min",
          ingredients:["4 salmon fillets (150g each)","2 tbsp white miso paste (low sodium)","1 tbsp mirin","1 tsp sesame oil","8 large carrots, sliced into coins","400g frozen edamame, defrosted","2 tbsp olive oil","1 tsp sesame seeds, ground (for baby)"],
          steps:["Preheat oven to 220°C. Toss carrots in olive oil, roast 10 mins.","Mix miso, mirin and sesame oil into a glaze. Reserve one plain salmon fillet for baby — no glaze.","Brush adult fillets with miso glaze. Add all salmon and edamame to the tray. Bake 15 mins until salmon flakes.","BABY: Flake the plain fillet very finely — feel for pin bones every time. Mash carrots. Press each edamame flat. Sprinkle ground sesame. Carrots provide vitamin C to boost edamame iron.","ADULTS: Serve from the tray."]
        }
      },
      {
        day:"Thursday", meal:"Polenta Bake with Zucchini, Tomato & Beef Ragout",
        allergens:["Dairy"], nutrition:["Iron","Zinc","Vitamin C","Protein","Calcium"],
        nutritionNotes:"Beef = haem iron + zinc. Courgette and tomato = vitamin C to boost iron absorption. Soft polenta is gentle for baby and naturally smooth. Parmesan adds calcium. Adapted from Martha Rose Shulman's polenta with added beef for iron.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"190°C / 375°F", time:"40 min",
          ingredients:["800g lean beef mince","4 courgettes, sliced into half-moons","4 tins (400g) chopped tomatoes","1 small onion, finely chopped","½ tsp garlic powder","1 tsp dried oregano","1 tsp dried basil","1 tbsp chopped fresh mint","500g cooked polenta, sliced","80g parmesan, grated","2 tbsp olive oil"],
          steps:["Preheat oven to 190°C. Brown beef 3 mins, drain fat. Add onion, courgette, tomatoes, garlic, oregano and basil. Simmer 5 mins.","Oil a baking dish and layer polenta slices on the base. Top with the beef-courgette ragout. Scatter parmesan over.","Bake 30 mins until bubbling and golden.","BABY: Scoop a portion — polenta is naturally soft. Mash the ragout lightly, making sure courgette is very soft. Tomato vitamin C boosts beef iron. Use only a small amount of parmesan (sodium).","ADULTS: Serve with fresh mint scattered over."],
          attribution:"Adapted from \"Polenta With Zucchini and Tomatoes\" by Martha Rose Shulman, NYT Cooking"
        }
      },
      {
        day:"Sunday", meal:"Baked Scallops with Roasted Sweet Potato & Pea Purée",
        allergens:["Molluscs","Egg","Dairy","Tree Nuts"], nutrition:["Iron","Zinc","Vitamin C","Protein","Calcium"],
        nutritionNotes:"First mollusc introduction. Scallops = lean protein + zinc + B12, with a mild flavour and soft texture babies take to. Sweet potato = vitamin A + vitamin C to boost iron. Peas = iron + zinc + vitamin C. Grated egg and parmesan add calcium and extra iron; ground almond adds healthy fats and zinc.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"35 min",
          ingredients:["16 scallops (roe removed), patted dry","4 medium sweet potatoes, peeled and cubed 2cm","2 tbsp olive oil","½ tsp garlic powder","400g frozen peas","100ml whole milk","60g butter","60g parmesan, grated","2 eggs, hard boiled (for baby iron boost)","2 tbsp almonds, finely ground (for baby topping)","Juice of ½ lemon (adults only)"],
          steps:["Preheat oven to 200°C. Toss sweet potato cubes in olive oil and garlic powder. Roast 22–25 mins until soft and caramelised at the edges.","Push the sweet potato to the sides. Add the scallops to the centre of the tray and bake a further 8–10 mins, until firm and opaque all the way through (63°C / 145°F). Don't overbake or they toughen.","Boil peas 3 mins. Blend with milk, butter and parmesan until smooth.","BABY: Take 2–3 plain scallops before any lemon. Check they're opaque right through, then finely mince or mash them into the soft sweet potato so there are no whole pieces — scallops are chewy and a choking risk otherwise. Serve alongside pea purée. Grate hard boiled egg over and sprinkle ground almond. Peas and sweet potato provide vitamin C. First mollusc: offer a small amount early in the day and watch baby for any reaction.","ADULTS: Squeeze lemon over the scallops and serve over sweet potato with pea purée."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Make miso glaze (Tuesday)",detail:"Mix white miso, mirin and sesame oil into a glaze. Store in a jar. On Tuesday brush over adult salmon — remember to reserve one plain fillet for baby first."},
      {step:"2",title:"Slice carrots & defrost edamame (Tuesday)",detail:"Slice carrots into coins, bag in fridge. Move edamame from freezer to fridge Monday evening."},
      {step:"3",title:"Brown beef & prep ragout veg (Thursday)",detail:"Brown beef mince 3 mins, drain, cool and store. Slice courgettes and chop onion, bag separately. Thursday just combine and layer over polenta."},
      {step:"4",title:"Hard boil 2 eggs (Sunday)",detail:"Boil 10 mins. Cool, peel, store in fridge. Grate over baby's scallop portion on Sunday for extra iron."},
      {step:"5",title:"Cube sweet potatoes & thaw scallops (Sunday)",detail:"Peel and cube sweet potato into 2cm pieces; bag in the fridge for Sunday's scallop tray. If using frozen scallops, thaw overnight in the fridge, keep cold, and pat dry before roasting."},
      {step:"6",title:"Grind almonds for topping",detail:"Pulse a small amount of almonds to fine crumbs. Store in a jar. Use as baby topping on Sunday for zinc and healthy fats."}
    ],
    textures:["Miso salmon (Tuesday): flake the plain baby fillet very finely, run fingertips through to feel for pin bones every time.","Edamame: ALWAYS press flat between fingers — never serve whole.","Polenta: naturally soft and smooth — ideal for baby. Mash the beef ragout lightly, ensure courgette is very soft.","Carrots: must be roasted until completely soft. Mash for baby.","Scallops (Sunday): cook until firm and opaque right through (63°C / 145°F) but no further, or they toughen. Finely mince or mash into the sweet potato — never serve whole. First mollusc: start with a small amount and watch for a reaction.","Pea puree (Sunday): blend until very smooth. Pass through a sieve if any skins remain.","Ground almond (Sunday): fine powder only for baby — no visible nut pieces. Sprinkle as a topping."],
    allergenCoverage:{hit:["Fish","Soy","Sesame","Dairy","Egg","Tree Nuts","Molluscs"],skipped:["Peanut","Wheat","Shellfish"]}
  },
  {
    title:"Week 5", nutritionFocus:"Gut Health, Fibre & Immune Boost",
    nutritionNote:"Introduces fermented foods (yoghurt, miso) for gut microbiome, high-fibre legumes for digestion, and antioxidant-rich veg for immune support. Omega-3 maintained.",
    babyPortionNote:"At 10–11 months baby can start handling slightly more texture. Offer soft finger foods alongside mashed portions to encourage self-feeding and motor development.",
    meals:[
      {
        day:"Tuesday", meal:"Miso Butter Cod with Roasted Sweet Potato & Edamame",
        allergens:["Fish","Soy","Sesame","Dairy"], nutrition:["Omega-3","Iron","Zinc","Vitamin C","Healthy Fats","Protein"],
        nutritionNotes:"Cod = lean protein + omega-3. White miso adds umami and fermentation; a little butter makes the glaze rich and baby-friendly. Sweet potato = vitamin A + C. Edamame = iron + zinc. Sesame adds calcium. Adapted from Namiko Chen's miso fish method.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"25 min",
          ingredients:["4 cod fillets","4 tsp white miso paste (low sodium)","20g butter, softened","1 tsp mirin","½ tsp ginger powder","4 medium sweet potatoes, peeled and cubed","400g frozen edamame, defrosted","2 tbsp olive oil","1 tsp sesame seeds, ground (for baby)"],
          steps:["Preheat oven to 200°C. Toss sweet potato cubes in olive oil. Roast 15 mins.","Mash miso, butter, mirin and ginger into a paste. Reserve one plain cod fillet for baby — no paste.","Spread miso butter over adult fillets. Push sweet potato to the sides, add all cod and edamame to the tray. Bake 12–15 mins until cod flakes.","BABY: Flake the plain fillet very finely — feel for bones. Mash sweet potato smooth. Press each edamame flat. Sprinkle ground sesame. Sweet potato vitamin C boosts edamame iron.","ADULTS: Serve from the tray with extra black pepper."],
          attribution:"Adapted from \"Miso Salmon\" by Namiko Hirasawa Chen, Just One Cookbook"
        }
      },
      {
        day:"Thursday", meal:"Sheet Pan Teriyaki Chicken Thighs with Broccoli & Snap Peas",
        allergens:["Soy","Wheat","Sesame"], nutrition:["Iron","Zinc","Protein","Vitamin C","Fibre"],
        nutritionNotes:"Chicken thighs = iron + zinc + protein, juicier than breast. Homemade teriyaki keeps sodium low. Broccoli and snap peas = vitamin C to boost iron. Sesame adds calcium. Adapted from Just One Cookbook's teriyaki method.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"40 min",
          ingredients:["8 bone-in skin-on chicken thighs","4 tbsp low-sodium soy sauce","2 tbsp mirin","1 tsp ginger powder","½ tsp garlic powder","400g broccoli florets","200g sugar snap peas","2 tbsp olive oil","1 tsp sesame seeds, ground (for baby)"],
          steps:["Mix soy, mirin, ginger and garlic into a teriyaki sauce. Reserve one plain thigh and a little plain sauce for baby before glazing.","Preheat oven to 200°C. Coat adult thighs in sauce and place skin-up on a lined tray; add the reserved plain thigh to the same tray, unglazed. Bake 25 mins.","Toss broccoli and snap peas in olive oil, add to the tray. Bake 15 more mins, until the thighs reach 75°C / 165°F at the bone.","BABY: Shred the reserved plain thigh very finely — remove skin and bone. Cut broccoli and snap peas into tiny soft pieces. Sprinkle ground sesame. A tiny brush of teriyaki only. Broccoli vitamin C boosts chicken iron.","ADULTS: Serve thighs with veg, spoon over pan juices."],
          attribution:"Adapted from \"Teriyaki Chicken\" method, Just One Cookbook"
        }
      },
      {
        day:"Sunday", meal:"Baked Almond-Crusted Chicken with Roasted Asparagus & Brown Rice",
        allergens:["Tree Nuts","Dairy","Egg"], nutrition:["Iron","Zinc","Vitamin C","Healthy Fats","Calcium","Protein"],
        nutritionNotes:"Chicken = zinc + protein. Almonds = vitamin E + healthy fats + calcium + zinc. Asparagus = folate + vitamin C + iron. Egg wash binds crust. Brown rice = zinc + fibre.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"25 min",
          ingredients:["4 chicken breasts","160g almonds, very finely ground","2 eggs, beaten (for coating)","60g parmesan, grated (mixed into crust)","1 tsp dried tarragon","400g asparagus, woody ends removed","2 tbsp olive oil","600g brown rice, cooked"],
          steps:["Preheat oven to 200°C. Mix ground almonds, parmesan and tarragon together.","Dip chicken breasts in beaten egg then press almond crust firmly on top.","Toss asparagus in olive oil. Arrange on tray around chicken.","Bake 28–30 mins until crust is golden and chicken is cooked through.","BABY: Reserve a small uncrusted chicken piece — bake plain alongside. Shred very finely. For the crust, mix a small amount of finely ground almond into baby's rice as a topping. Cut asparagus into 1cm pieces after roasting. Asparagus = vitamin C + iron + folate. Serve over soft brown rice.","ADULTS: Slice chicken and serve over brown rice with asparagus."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Make miso butter (Tuesday)",detail:"Mash white miso, softened butter, mirin and ginger into a paste. Store in fridge. On Tuesday spread over adult cod — reserve one plain fillet for baby first."},
      {step:"2",title:"Cube sweet potatoes & defrost edamame (Tuesday)",detail:"Peel and cube sweet potato 2cm, bag in fridge. Move edamame from freezer to fridge Monday evening."},
      {step:"3",title:"Make teriyaki sauce (Thursday)",detail:"Mix soy, mirin, ginger and garlic. Reserve a little plain sauce and plan one plain thigh for baby. Store sauce in a jar — coat adult thighs Thursday."},
      {step:"4",title:"Grind almonds (Sunday)",detail:"Pulse almonds to very fine crumbs, mix with parmesan. Store in a jar. On Sunday just dip chicken in egg and press crust on."},
      {step:"5",title:"Cook brown rice",detail:"Cook large batch. Cool. Bag into portions for Sunday and leftovers."},
      {step:"6",title:"Cut broccoli & snap peas (Thursday)",detail:"Cut broccoli into florets and trim snap peas. Bag in fridge ready for Thursday's tray."}
    ],
    textures:["Cod (Tuesday): flake very finely and feel for bones with fingertips before every serve.","Edamame: ALWAYS press flat — never whole.","Teriyaki chicken thighs (Thursday): shred the plain baby thigh very finely, remove all skin and bone. Cut broccoli and snap peas into tiny soft pieces.","Snap peas: must be very soft and finely chopped — fibrous strings are a choking risk if undercooked.","Almond crust (Sunday): must be ground to fine powder for baby — no visible nut pieces. Mix into rice as a topping rather than giving baby the crusted chicken directly.","Brown rice: add a splash of water when reheating to keep it moist and easy for baby to gum."],
    allergenCoverage:{hit:["Fish","Soy","Sesame","Dairy","Egg","Wheat","Tree Nuts"],skipped:["Peanut"]}
  },
  {
    title:"Week 6", nutritionFocus:"Full Nutritional Round-Up — Best of Everything",
    nutritionNote:"Final week hits every nutritional target: highest omega-3, maximum iron variety, full zinc coverage, vitamin C at every meal, and healthy fats in every dish. The strongest week nutritionally.",
    babyPortionNote:"By week 6 baby is approaching 11 months. Finger foods can now be slightly larger — strips and small chunks baby can pick up are ideal for pincer grip development. Keep supervising.",
    meals:[
      {
        day:"Tuesday", meal:"Teriyaki Salmon with Pak Choi & Edamame",
        allergens:["Fish","Soy","Sesame"], nutrition:["Omega-3","Iron","Zinc","Healthy Fats","Vitamin C","Protein"],
        nutritionNotes:"Salmon = omega-3 DHA + iron + protein. Clean teriyaki glaze (no added sugar for baby). Pak choi = vitamin C + iron + calcium. Edamame = plant iron + zinc. Sesame adds calcium. Adapted from Namiko Chen's teriyaki salmon.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"20 min",
          ingredients:["4 salmon fillets (150g each)","4 tbsp low-sodium soy sauce","2 tbsp mirin","1 tsp ginger powder","4 heads pak choi, halved","400g frozen edamame, defrosted","1 tbsp sesame oil","1 tsp sesame seeds, ground (for baby)"],
          steps:["Mix soy, mirin, ginger and sesame oil into a teriyaki glaze. Reserve one plain salmon fillet for baby — no glaze.","Preheat oven to 200°C. Brush adult fillets with glaze. Place all salmon on a lined tray. Bake 12 mins.","Add pak choi and edamame to the tray, brushing the adults' side with a little glaze. Bake 6–8 more mins.","BABY: Flake the plain fillet very finely — check for pin bones. Cut pak choi into small soft pieces. Press each edamame flat. Sprinkle ground sesame. Pak choi provides vitamin C and iron.","ADULTS: Serve salmon over pak choi and edamame, spoon glaze over."],
          attribution:"Adapted from \"Teriyaki Salmon\" by Namiko Hirasawa Chen, Just One Cookbook"
        }
      },
      {
        day:"Thursday", meal:"One-Pan Orzo with Prawns, Scallops, Spinach & Peas",
        allergens:["Wheat","Shellfish","Molluscs","Dairy"], nutrition:["Iron","Zinc","Vitamin C","Protein","Calcium","Fibre"],
        nutritionNotes:"Final-week showcase: prawns (Week 2) and scallops (Week 4) have each been introduced on their own, so by now combining them is safe. Prawns + scallops = zinc + B12 + lean protein. Spinach = iron. Peas and lemon = vitamin C to boost absorption. Feta adds calcium. Inspired by Melissa Clark's one-pan orzo, made into a seafood version.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"35 min",
          ingredients:["300g orzo","4 large scallions, sliced","2 large garlic cloves, minced","250g baby spinach, chopped","700ml low-sodium veg stock","1 tsp lemon zest","250g raw prawns, peeled and deveined (tails off)","12 scallops (roe removed), halved","160g feta, crumbled","1 cup chopped fresh dill","2 tbsp olive oil","400g frozen peas"],
          steps:["Preheat oven to 200°C. In an oven dish, mix orzo, scallions, garlic, spinach, stock, lemon zest and olive oil.","Cover with foil. Bake 20 mins. Stir, add peas and bake 5 more mins until the orzo is nearly tender — add a splash more stock if it looks dry.","Pat the prawns and scallops dry and stir them through the hot orzo. Re-cover and bake a final 6–8 mins, until the prawns are pink and opaque and the scallops are firm and opaque (63°C / 145°F). Don't overcook.","Stir through most of the feta and dill. Reserve baby's portion before the final feta.","BABY: Make sure the prawns and scallops are fully opaque and cooked through. Remove any prawn tail, shell or vein, then finely mince both the prawn and scallop pieces and stir them through the soft orzo so there are no whole pieces. Orzo and spinach should be very soft. Use only a small amount of feta (sodium). Spinach and peas provide vitamin C.","ADULTS: Top with remaining feta and dill, and a squeeze of lemon."]
        }
      },
      {
        day:"Sunday", meal:"Sheet Pan Beef, Spinach & Kidney Bean Bake with Roasted Pepper",
        allergens:["Egg","Dairy"], nutrition:["Iron","Zinc","Vitamin C","Protein","Calcium","Fibre"],
        nutritionNotes:"Triple iron hit: beef + spinach + kidney beans. Red pepper = maximum vitamin C to boost all three. Egg and cheese add calcium and additional iron. Highest single-meal iron content in the plan.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"190°C / 375°F", time:"40 min",
          ingredients:["800g lean beef mince","200g baby spinach, chopped","2 tins (400g) kidney beans, drained","4 red peppers, sliced","2 tins (400g) chopped tomatoes","1 tsp smoked paprika","1 tsp dried oregano","½ tsp garlic powder","3 eggs, beaten","100g cheddar, grated"],
          steps:["Preheat oven to 190°C. Brown beef mince 3 mins on hob. Drain fat.","Add spinach, kidney beans, tomatoes and garlic. Stir. Reserve baby's portion into a small ovenproof dish now, before the paprika.","Transfer the adult portion to a large baking dish. Lay red pepper slices over both dishes. Pour most of the beaten egg over the adult dish and a spoonful over baby's. Scatter cheddar over the adult dish (keep baby's plain or use a tiny amount for lower sodium). Stir paprika into the adult portion only. Bake both 35 mins, until set and the beef is cooked through (71°C / 160°F — no pink).","BABY: Scoop baby's baked portion, ensuring all three iron sources are included and the mince is fully cooked through with no pink. Mash kidney beans. Break up any set egg. The red pepper = high vitamin C to boost beef, spinach and kidney bean iron simultaneously.","ADULTS: Serve from dish with crusty bread."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Make teriyaki glaze (Tuesday)",detail:"Mix soy, mirin, ginger and sesame oil into a glaze. Store in a jar. On Tuesday brush over adult salmon — reserve one plain fillet for baby first."},
      {step:"2",title:"Defrost edamame (Tuesday)",detail:"Move edamame from freezer to fridge Monday evening so it's ready for Tuesday's salmon tray."},
      {step:"3",title:"Chop orzo veg (Thursday)",detail:"Slice scallions, mince garlic, chop spinach. Bag together in the fridge. Thursday everything goes into one dish with the orzo and stock."},
      {step:"4",title:"Thaw prawns & scallops (Thursday)",detail:"If frozen, move prawns and scallops to the fridge to thaw overnight; keep cold and pat dry before they go in the oven Thursday. They cook fast, so they stir into the orzo near the end."},
      {step:"5",title:"Brown beef mince (Sunday)",detail:"Brown 3 mins, drain fat, cool and store. Sunday just layer into baking dish with spinach, kidney beans, tomatoes and eggs — reserve baby's portion before the paprika."},
      {step:"6",title:"Drain & bag kidney beans (Sunday)",detail:"Drain and rinse kidney beans. Bag separately in the fridge until Sunday."}
    ],
    textures:["Teriyaki salmon (Tuesday): flake the plain baby fillet very finely. Feel for pin bones every single time.","Pak choi: steam until leaves are completely wilted and stalk is fork-tender. Cut stalk into very small pieces.","Edamame: ALWAYS press flat — never whole.","Orzo (Thursday): cook until very soft. Small grain shape is easy for baby once tender.","Prawns & scallops (Thursday): cook fully to opaque / 63°C / 145°F but no further (they toughen). Remove any prawn tail, shell or vein, then finely mince both and stir through the soft orzo — never serve whole.","Beef bake (Sunday): mash kidney beans throughout. Break up any egg that has set in chunks. Red pepper should be very soft — peel if skin is still firm."],
    allergenCoverage:{hit:["Wheat","Egg","Dairy","Fish","Sesame","Soy","Shellfish","Molluscs"],skipped:["Peanut","Tree Nuts"]}
  }
];

// Flatten all meals for glossary
const ALL_MEALS = WEEKS.flatMap((w,wi) => w.meals.map((m,mi) => ({...m, weekIndex:wi, mealIndex:mi, weekTitle:w.title})));


const CORE_SNACKS = [
  { name: "Full-fat plain yoghurt", nutrition: ["Calcium","Protein","Healthy Fats"], notes: "Serve as is — no added sugar. Can mix in a small amount of mashed fruit." },
  { name: "Soft ripe banana", nutrition: ["Fibre","Vitamin C"], notes: "Slice into small rounds or mash. Perfect finger food at this age." },
  { name: "Avocado slices", nutrition: ["Healthy Fats","Vitamin C"], notes: "Slice into strips — easy for baby to pick up. Sprinkle ground sesame for calcium." },
  { name: "Soft cooked broccoli florets", nutrition: ["Iron","Vitamin C","Calcium"], notes: "Steam until very soft. Baby can pick up and gum. Great iron + vitamin C combo." },
  { name: "Rice cakes (plain, low salt)", nutrition: ["Wheat"], notes: "Dissolve easily in mouth. Spread with a thin layer of peanut butter or avocado." },
  { name: "Peanut butter on rice cake", nutrition: ["Peanut","Healthy Fats","Zinc"], notes: "Thin layer only — never a spoonful. Keeps peanut allergen exposure consistent." },
  { name: "Soft cooked carrot sticks", nutrition: ["Vitamin C","Fibre"], notes: "Roast or steam until completely fork-tender. Good finger food shape for grip practice." },
  { name: "Grated hard boiled egg", nutrition: ["Egg","Iron","Zinc","Protein"], notes: "Grate over yoghurt or soft fruit. Easy iron boost between meals." },
  { name: "Mashed sweet potato", nutrition: ["Vitamin C","Fibre"], notes: "Batch cook on Monday. Serve cold or warm in a small pot with a spoon." },
  { name: "Soft ripe mango cubes", nutrition: ["Vitamin C"], notes: "Very high vitamin C — excellent paired after any iron-rich meal. Cut into small cubes." },
];

const WEEKLY_SNACKS = [
  { week: 1, extras: [
    { name: "Cream cheese on soft toast fingers", nutrition: ["Dairy","Wheat","Calcium"], notes: "Cut toast into thin fingers. Soft enough to gum. Cream cheese adds calcium and healthy fats." },
    { name: "Lentil puffs (shop bought, low salt)", nutrition: ["Iron","Fibre"], notes: "Check label for low sodium. Dissolve easily — great for practising pincer grip." },
  ]},
  { week: 2, extras: [
    { name: "Cashew butter on rice cake", nutrition: ["Tree Nuts","Healthy Fats","Zinc"], notes: "Thin layer only. Keeps tree nut exposure going between meals." },
    { name: "Soft cooked quinoa with mashed banana", nutrition: ["Iron","Zinc","Fibre"], notes: "Mix cooked quinoa into mashed banana. Quinoa adds iron and complete protein to a sweet snack." },
  ]},
  { week: 3, extras: [
    { name: "Plain full-fat yoghurt with ground sesame", nutrition: ["Dairy","Sesame","Calcium","Healthy Fats"], notes: "Stir ground sesame seeds into yoghurt. Keeps sesame exposure up and adds calcium." },
    { name: "Soft cooked edamame (pressed flat)", nutrition: ["Soy","Iron","Zinc"], notes: "ALWAYS press flat before serving — never whole. Great zinc snack between meals." },
  ]},
  { week: 4, extras: [
    { name: "Mashed avocado with diced tomato", nutrition: ["Healthy Fats","Vitamin C"], notes: "Tomato adds vitamin C to complement avocado's healthy fats. Serve with a soft spoon." },
    { name: "Soft cooked pasta with a scrape of pesto", nutrition: ["Wheat","Tree Nuts","Dairy"], notes: "A few pieces of very soft pasta with a tiny amount of blended walnut pesto. Good zinc hit." },
  ]},
  { week: 5, extras: [
    { name: "Almond butter on soft banana", nutrition: ["Tree Nuts","Healthy Fats","Zinc"], notes: "Mash banana and stir in a small amount of almond butter. Keeps nut exposure varied." },
    { name: "Steamed asparagus tips", nutrition: ["Vitamin C","Iron","Fibre"], notes: "Steam tips until very soft. Cut into small pieces. High in folate for development." },
  ]},
  { week: 6, extras: [
    { name: "Soft wholemeal bread with mashed avocado", nutrition: ["Wheat","Healthy Fats","Vitamin C"], notes: "Use the very soft inside of wholemeal bread. Avocado provides healthy fats and vitamin C." },
    { name: "Small cubes of soft cheddar", nutrition: ["Dairy","Calcium","Protein"], notes: "Cut into very small cubes — easy to gum. High calcium. Good finger food for pincer grip." },
  ]},
];


const GROCERY_LISTS = [
  { week: 1, categories: [
    { name: "🥦 Fresh Veg", items: ["4 red peppers","4 medium sweet potatoes","300g kale, stems removed","200g baby spinach"] },
    { name: "🥩 Meat & Fish", items: ["4 salmon fillets (150g each)","800g lean beef mince","4 chicken breasts"] },
    { name: "🧀 Dairy & Eggs", items: ["100g full-fat cream cheese","Parmesan (80g)","2 eggs","Butter"] },
    { name: "🌾 Grains & Pasta", items: ["400g pasta (penne or fusilli)","60g breadcrumbs"] },
    { name: "🥫 Tins & Jars", items: ["2 tins green lentils (400g each)","4 tins chopped tomatoes (400g each)","Smooth peanut butter (no added salt/sugar)","2 tbsp Dijon mustard"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Garlic powder","Onion powder","Dried thyme","Dried oregano","Dried basil","Ginger powder"] },
  ]},
  { week: 2, categories: [
    { name: "🥦 Fresh Veg", items: ["1 large butternut squash","600g cherry tomatoes","400g broccoli florets"] },
    { name: "🥩 Meat & Fish", items: ["4 trout fillets","400g raw prawns (peeled, deveined, no added salt)","4 chicken breasts (for Sunday)"] },
    { name: "🧀 Dairy & Eggs", items: ["160g feta cheese","6 eggs","Full-fat plain yoghurt"] },
    { name: "🌾 Grains & Pasta", items: ["400g quinoa","Brown rice (large bag — large batch needed)"] },
    { name: "🥫 Tins & Jars", items: ["2 tins green lentils (400g each)","2 tins chickpeas (400g each)","4 tbsp tahini"] },
    { name: "🥜 Nuts & Seeds", items: ["100g walnuts","100g cashews","Ground sesame seeds (jar)"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Maple syrup","Garlic powder","Dried thyme","Mild curry powder","Dried rosemary"] },
  ]},
  { week: 3, categories: [
    { name: "🥦 Fresh Veg", items: ["4 courgettes","200g shiitake mushrooms","200g baby spinach","400g broccoli florets","400g frozen edamame"] },
    { name: "🥩 Meat & Fish", items: ["800g lamb mince","800g lean beef mince","4 chicken breasts"] },
    { name: "🧀 Dairy & Eggs", items: ["Full-fat plain yoghurt (300g)","4 eggs"] },
    { name: "🌾 Grains & Pasta", items: ["400g soba noodles","Brown rice (large bag — large batch needed)"] },
    { name: "🥫 Tins & Jars", items: ["2 tins green lentils (400g each)","4 tins chopped tomatoes (400g each)"] },
    { name: "🥜 Nuts & Seeds", items: ["Cashews (to grind, small amount)","Ground sesame seeds"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Mirin","Garlic powder","Dried rosemary","Dried thyme","Ginger powder","Pitta bread (adults)"] },
  ]},
  { week: 4, categories: [
    { name: "🥦 Fresh Veg", items: ["8 large carrots","4 courgettes","1 small onion","4 medium sweet potatoes","400g frozen peas","400g frozen edamame","1 lemon"] },
    { name: "🥩 Meat & Fish", items: ["4 salmon fillets (150g each)","800g lean beef mince","16 scallops (roe removed)"] },
    { name: "🧀 Dairy & Eggs", items: ["Parmesan (80g)","60g butter","6 eggs","100ml whole milk"] },
    { name: "🌾 Grains & Pasta", items: ["500g cooked polenta (or polenta to cook)"] },
    { name: "🥫 Tins & Jars", items: ["4 tins chopped tomatoes (400g each)","White miso paste (low sodium)"] },
    { name: "🥜 Nuts & Seeds", items: ["Almonds (to grind, small amount)","Ground sesame seeds"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Sesame oil","Mirin","Garlic powder","Dried thyme","Dried oregano","Dried basil","Dried tarragon","Fresh mint","Ginger powder"] },
  ]},
  { week: 5, categories: [
    { name: "🥦 Fresh Veg", items: ["4 medium sweet potatoes","400g frozen edamame","400g broccoli florets","200g sugar snap peas","400g asparagus"] },
    { name: "🥩 Meat & Fish", items: ["4 cod fillets","8 bone-in skin-on chicken thighs","4 chicken breasts (Sunday)"] },
    { name: "🧀 Dairy & Eggs", items: ["20g butter","Parmesan (60g)","2 eggs"] },
    { name: "🌾 Grains & Pasta", items: ["Brown rice (large bag — large batch needed)"] },
    { name: "🥫 Tins & Jars", items: ["White miso paste (low sodium)"] },
    { name: "🥜 Nuts & Seeds", items: ["160g almonds (to grind)","Ground sesame seeds"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Mirin","Garlic powder","Ginger powder","Dried tarragon"] },
  ]},
  { week: 6, categories: [
    { name: "🥦 Fresh Veg", items: ["4 heads pak choi","400g frozen edamame","4 scallions","250g baby spinach","200g baby spinach (Sunday bake)","4 red peppers","400g frozen peas","Fresh dill","1 lemon"] },
    { name: "🥩 Meat & Fish", items: ["4 salmon fillets (150g each)","800g lean beef mince","250g raw prawns (peeled, deveined)","12 scallops (roe removed)"] },
    { name: "🧀 Dairy & Eggs", items: ["160g feta","100g cheddar","3 eggs"] },
    { name: "🌾 Grains & Pasta", items: ["300g orzo"] },
    { name: "🥫 Tins & Jars", items: ["2 tins kidney beans (400g each)","2 tins chopped tomatoes (400g each)","Low-sodium veg stock (700ml)"] },
    { name: "🥜 Nuts & Seeds", items: ["Ground sesame seeds"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Mirin","Garlic powder","Smoked paprika","Dried oregano","Ginger powder"] },
  ]},
];


export { ALLERGENS, COLORS, NUTR_COLORS, WEEKS, ALL_MEALS, CORE_SNACKS, WEEKLY_SNACKS, GROCERY_LISTS };
