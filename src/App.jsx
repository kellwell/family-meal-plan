import { useState } from "react";

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
          ingredients:["4 salmon fillets (150g each)","2 tins (400g) green lentils, drained","4 red peppers, deseeded and sliced","2 tbsp Dijon mustard","2 tbsp olive oil (split use)","½ tsp garlic powder","½ tsp onion powder","1 tsp dried thyme","100ml low-sodium stock","100g full-fat cream cheese (for baby)","60g butter"],
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
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"30 min",
          ingredients:["4 trout fillets","1 large butternut squash, peeled and cubed 2cm","400g quinoa","800ml low-sodium veg stock","1 tsp dried thyme","4 tbsp tahini","Juice of 1 lemon (adults only)","2 tbsp olive oil"],
          steps:["Preheat oven to 200°C. Toss squash in olive oil. Roast 15 mins.","Cook quinoa in stock 15 mins until absorbed. Fluff with fork.","Push squash to sides. Lay trout fillets on tray. Bake further 12–15 mins.","Thin tahini with 2 tbsp water into a drizzle.","BABY: Flake trout very carefully — it has fine bones, check thoroughly. Mash squash smooth. Mix with quinoa and a drizzle of tahini. Squash provides vitamin C to boost quinoa iron.","ADULTS: Serve over quinoa. Mix tahini with lemon juice and drizzle over."]
        }
      },
      {
        day:"Thursday", meal:"Baked Chicken & Chickpea Tray with Roasted Tomatoes & Feta",
        allergens:["Dairy","Egg"], nutrition:["Iron","Zinc","Vitamin C","Protein","Calcium"],
        nutritionNotes:"Chickpeas = iron + zinc + fibre. Chicken = zinc + protein. Tomatoes = high vitamin C, dramatically boosts chickpea iron absorption. Feta = calcium.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"35 min",
          ingredients:["4 chicken thighs, bone-in skin-on","2 tins (400g) chickpeas, drained","600g cherry tomatoes","2 tbsp olive oil","1 tsp mild curry powder","½ tsp garlic powder","160g feta, crumbled","2 eggs, hard boiled"],
          steps:["Preheat oven to 200°C. Mix chickpeas, tomatoes, olive oil, cumin and garlic in a baking dish.","Nestle chicken on top skin-side up. Bake 35 mins.","BABY: Squash each chickpea flat between fingers — removes skin and choking risk. Shred chicken finely removing skin. Spoon plenty of tomato juice over for vitamin C. Crumble feta on top. Grate hard boiled egg over for extra iron.","ADULTS: Serve from dish with feta crumbled on top."]
        }
      },
      {
        day:"Sunday", meal:"Baked Walnut & Cashew Crusted Chicken with Broccoli & Brown Rice",
        allergens:["Tree Nuts","Soy","Sesame","Egg"], nutrition:["Iron","Zinc","Healthy Fats","Vitamin C","Protein","Calcium"],
        nutritionNotes:"Chicken = zinc + protein. Walnut + cashew crust = zinc + healthy fats + iron. Broccoli = vitamin C + iron + calcium. Egg wash binds crust. Brown rice = zinc + fibre.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"25 min",
          ingredients:["4 chicken breasts","100g walnuts, finely ground","100g cashews, finely ground","2 eggs, beaten (for coating)","2 tbsp sesame oil","2 tbsp low-sodium soy sauce","1 tsp dried rosemary, finely chopped","400g broccoli florets","600g brown rice, cooked","2 tbsp olive oil"],
          steps:["Preheat oven to 200°C. Mix ground nuts with soy sauce and sesame oil into a paste.","Dip chicken breasts in beaten egg then press nut crust firmly on top.","Place on a lined tray with broccoli tossed in olive oil around the chicken.","Bake 28–30 mins until chicken is cooked through and crust is golden.","BABY: Reserve a small piece of uncrusted chicken — bake plain alongside. Shred very finely. For the crust, ensure nuts are ground to fine powder — mix a small amount into baby's rice as a topping. Cut broccoli into tiny soft pieces. Vitamin C in broccoli boosts iron from chicken and rice.","ADULTS: Slice chicken and serve over brown rice with broccoli."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Grind nuts (Sunday)",detail:"Pulse walnuts and cashews to fine powder separately. Store in jars. Use as baby topping all week for zinc and healthy fats."},
      {step:"2",title:"Cook brown rice",detail:"Cook large batch. Cool completely. Bag into portions. Fridge or freeze."},
      {step:"3",title:"Hard boil 3 eggs",detail:"Boil 10 mins. Cool, peel, store in fridge. Grate over baby meals all week as an easy iron boost."},
      {step:"4",title:"Drain and bag chickpeas",detail:"Drain, rinse and pat dry. Store in a ziplock bag ready for Thursday."},
      {step:"5",title:"Cube butternut squash",detail:"Peel and cube 2cm. Store in ziplock bag in fridge."},
      {step:"6",title:"Cook quinoa",detail:"Cook in stock. Cool and bag into portions for Tuesday dinner and Wednesday leftover."}
    ],
    textures:["Trout (Tuesday): similar to salmon — flake carefully and feel every piece for fine bones before serving.","Quinoa: tiny grains — mix well into mashed food so it doesn't sit loose.","Butternut squash: mash completely smooth after roasting.","Chickpeas: MUST be squashed flat between fingers — whole chickpeas are a choking hazard.","Nut crust (Sunday): grind walnuts and cashews to fine powder for baby — no visible chunks. Mix into rice as a topping rather than serving the crust directly.","Broccoli: roast or steam until completely fork-tender. Cut into pieces no larger than 1cm."],
    allergenCoverage:{hit:["Fish","Sesame","Dairy","Egg","Tree Nuts","Soy"],skipped:["Peanut","Wheat"]}
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
          steps:["Preheat oven to 190°C. Brown lamb in oven-proof pan 3 mins. Drain excess fat.","Add lentils, tomatoes, cumin and garlic. Stir. Arrange courgette on top.","Transfer to oven. Bake uncovered 40 mins.","BABY: Scoop lamb and lentil mixture, mash lightly. No large chunks. Add a spoonful of plain yoghurt for calcium. Courgette provides vitamin C to boost iron from lamb and lentils.","ADULTS: Serve with pitta and mint yoghurt."]
        }
      },
      {
        day:"Thursday", meal:"Baked Tuna & Egg Frittata with Roasted Cherry Tomatoes",
        allergens:["Fish","Egg","Dairy","Sesame"], nutrition:["Iron","Omega-3","Calcium","Vitamin C","Zinc","Protein"],
        nutritionNotes:"Tinned tuna = lean protein + omega-3 + iron, widely available and affordable. Eggs = iron + zinc. Cherry tomatoes = vitamin C to boost all iron. Cheddar adds calcium.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"180°C / 355°F", time:"25 min",
          ingredients:["4 tins (320g total) tuna in spring water, drained","10 eggs","200ml whole milk","200g cherry tomatoes, halved","100g cheddar, grated","1 tbsp sesame seeds, ground","2 tbsp olive oil"],
          steps:["Preheat oven to 180°C. Whisk eggs with milk.","Heat olive oil in oven-proof frying pan. Add drained tuna and break up gently. Pour egg mixture over.","Top with cherry tomatoes, grated cheddar and ground sesame seeds.","Bake 20–22 mins until set in the centre.","BABY: Cut a slice and break into soft flakes — tuna and egg make this very easy to gum. Cherry tomatoes provide vitamin C. Serve warm or at room temp.","ADULTS: Slice and serve with salad."]
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
      {step:"5",title:"Pre-grind sesame seeds",detail:"Grind to fine powder with pestle and mortar. Store in a small jar. Sprinkle over baby's meals all week."},
      {step:"6",title:"Drain and bag lentils",detail:"Drain and rinse. Bag in portions ready for Tuesday."}
    ],
    textures:["Lamb mince: ensure no large clumps. Mash lightly into lentils.","Tuna frittata: should be soft-set not rubbery — 22 mins max. Tuna flakes naturally into baby-friendly pieces.","Edamame: ALWAYS press flat between fingers — never serve whole.","Soba noodles: cut into 2cm pieces — never serve long noodles to baby.","Yoghurt: plain full-fat only — no added sugar. Fat content supports brain development.","Broccoli: must be very soft. Microwave with splash of water 1–2 mins if not tender enough."],
    allergenCoverage:{hit:["Dairy","Wheat","Fish","Egg","Sesame","Soy"],skipped:["Peanut","Tree Nuts"]}
  },
  {
    title:"Week 4", nutritionFocus:"Brain Development & Immune Support",
    nutritionNote:"Focuses on DHA for brain development (oily fish twice), vitamin A and C rich veg for immune function, and zinc for growth. Iron maintained throughout with vitamin C pairings.",
    babyPortionNote:"By week 4 baby should be comfortable with a range of textures. You can progress slightly — less mashing is fine if baby is tolerating well. Always supervise mealtimes.",
    meals:[
      {
        day:"Tuesday", meal:"Baked Chicken & Sweet Potato Tray with Pea Puree",
        allergens:["Egg","Wheat","Dairy"], nutrition:["Iron","Zinc","Vitamin C","Protein","Calcium"],
        nutritionNotes:"Chicken = zinc + protein. Sweet potato = vitamin A + vitamin C to boost iron absorption. Peas = iron + zinc + vitamin C. Egg and parmesan add calcium and extra iron.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"30 min",
          ingredients:["4 chicken breasts","4 medium sweet potatoes, peeled and cubed 2cm","2 tbsp olive oil","1 tsp dried thyme","½ tsp smoked paprika","½ tsp garlic powder","400g frozen peas","100ml whole milk","60g butter","60g parmesan, grated","2 eggs, hard boiled (for baby iron boost)"],
          steps:["Preheat oven to 200°C. Place chicken breasts in a baking dish. Arrange sweet potato cubes around them. Drizzle with olive oil, sprinkle garlic powder.","Cover with foil and bake 30 mins. Remove foil and bake a further 8 mins until chicken is golden.","Boil peas 3 mins. Blend with milk, butter and parmesan until smooth.","BABY: Shred chicken very finely. Mash sweet potato smooth. Serve alongside pea puree. Grate hard boiled egg over for extra iron. Both peas and sweet potato provide vitamin C.","ADULTS: Slice chicken, serve over sweet potato with pea puree. Season with salt and pepper."]
        }
      },
      {
        day:"Thursday", meal:"Baked Beef & Kidney Bean Chilli with Brown Rice & Avocado",
        allergens:["Wheat","Dairy","Egg"], nutrition:["Iron","Zinc","Healthy Fats","Vitamin C","Protein","Fibre"],
        nutritionNotes:"Beef = haem iron + zinc. Kidney beans = iron + zinc + fibre. Tinned tomatoes = vitamin C for iron absorption. Avocado = healthy fats + vitamin C. One of the highest iron meals in the plan.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"180°C / 355°F", time:"45 min",
          ingredients:["800g lean beef mince","2 tins (400g) kidney beans, drained","4 tins (400g each) chopped tomatoes","1 tsp smoked paprika","1 tsp dried oregano","½ tsp garlic powder","600g brown rice, cooked","2 ripe avocados","100g full-fat cheddar, grated","2 eggs, hard boiled"],
          steps:["Preheat oven to 180°C. Brown mince 3 mins on hob. Drain fat.","Add kidney beans, tomatoes, cumin and garlic. Transfer to oven. Bake covered 40 mins.","BABY: Scoop baby portion before adding paprika. Mash kidney beans — never whole. Mash a quarter avocado alongside for healthy fats. Grate hard boiled egg over for extra iron. Serve over soft brown rice.","ADULTS: Stir in smoked paprika. Serve over rice with sliced avocado and grated cheddar."]
        }
      },
      {
        day:"Sunday", meal:"Baked Salmon with Roasted Carrot, Lentil & Tahini Tray",
        allergens:["Fish","Sesame","Soy","Tree Nuts"], nutrition:["Omega-3","Iron","Zinc","Calcium","Vitamin C","Healthy Fats"],
        nutritionNotes:"Salmon = great omega-3 DHA + protein + iron. Lentils = iron. Carrots = beta-carotene + vitamin C. Tahini = calcium + zinc + healthy fats. Cashews add extra zinc.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"30 min",
          ingredients:["4 salmon fillets","2 tins (400g) green lentils, drained","8 large carrots, sliced into coins","4 tbsp tahini","2 tbsp low-sodium soy sauce","½ tsp turmeric","½ tsp ginger powder","2 tbsp olive oil","100g cashews, finely ground","600g quinoa or brown rice, cooked"],
          steps:["Preheat oven to 200°C. Toss carrots in olive oil. Roast 10 mins.","Add lentils around carrots. Nestle salmon fillets on top.","Mix tahini with soy sauce and 2 tbsp water. Drizzle half over tray. Bake 15 mins.","BABY: Flake salmon carefully — feel for pin bones with fingertips. Mash carrots smooth. Mix with lentils and a drizzle of tahini. Scatter ground cashews for zinc and healthy fats. Carrots = vitamin C to boost lentil iron.","ADULTS: Serve over quinoa/rice with remaining tahini dressing."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Cube sweet potatoes (Tuesday)",detail:"Peel and cube into 2cm pieces. Store in a ziplock bag in the fridge. Goes straight into the baking dish on Tuesday."},
      {step:"2",title:"Hard boil 3 eggs",detail:"Boil 10 mins. Cool, peel, store in fridge. Grate over baby meals all week as an easy iron boost."},
      {step:"3",title:"Brown beef mince (Thursday)",detail:"Brown 3 mins. Drain fat. Cool. Store in container. Thursday just tip into oven pot with beans and tomatoes."},
      {step:"4",title:"Hard boil 3 eggs",detail:"Boil 10 mins. Cool, peel, fridge. Grate over baby meals all week as easy iron boost."},
      {step:"5",title:"Ground cashews for topping",detail:"Pulse to fine crumbs. Store in jar. Use as baby topping for zinc and healthy fats."},
      {step:"6",title:"Drain and portion kidney beans and lentils",detail:"Drain and rinse both. Bag separately. Fridge until needed."}
    ],
    textures:["Chicken (Tuesday): shred very finely along the grain. If in doubt, chop finely with a knife after shredding.","Pea puree: blend until very smooth. Pass through a sieve if any skins remain — skins can be a choking texture for baby.","Kidney beans: MUST be mashed or squashed before serving — whole kidney beans are a choking hazard.","Avocado: mash with a fork. Naturally smooth — no extra prep needed.","Salmon: flake finely as always, run fingertips through to feel for pin bones every time.","Carrots: must be roasted until completely soft. Mash for baby."],
    allergenCoverage:{hit:["Fish","Egg","Wheat","Dairy","Sesame","Soy","Tree Nuts"],skipped:["Peanut"]}
  },
  {
    title:"Week 5", nutritionFocus:"Gut Health, Fibre & Immune Boost",
    nutritionNote:"Introduces fermented foods (yoghurt, miso) for gut microbiome, high-fibre legumes for digestion, and antioxidant-rich veg for immune support. Omega-3 maintained.",
    babyPortionNote:"At 10–11 months baby can start handling slightly more texture. Offer soft finger foods alongside mashed portions to encourage self-feeding and motor development.",
    meals:[
      {
        day:"Tuesday", meal:"Baked Miso Cod with Roasted Sweet Potato & Sesame Edamame",
        allergens:["Fish","Soy","Sesame"], nutrition:["Omega-3","Iron","Zinc","Vitamin C","Healthy Fats","Protein"],
        nutritionNotes:"Cod = lean protein + omega-3. Miso = fermented probiotic + zinc. Sweet potato = vitamin A + C. Edamame = iron + zinc + plant protein. Sesame = calcium + healthy fats.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"25 min",
          ingredients:["4 cod fillets","4 tsp white miso paste (low sodium)","2 tbsp sesame oil","½ tsp ginger powder","4 medium sweet potatoes, peeled and cubed","400g frozen edamame, defrosted","2 tbsp olive oil","1 tsp sesame seeds, ground (for baby)"],
          steps:["Preheat oven to 200°C. Toss sweet potato cubes in olive oil. Roast 15 mins.","Mix miso and sesame oil. Brush over cod fillets. Push sweet potato to sides, add cod and edamame to tray.","Bake further 12–15 mins until cod flakes easily.","BABY: Flake cod very finely — feel for bones. Mash sweet potato smooth. Press each edamame flat between fingers. Sprinkle ground sesame seeds over. Sweet potato = vitamin C to boost edamame iron.","ADULTS: Serve from tray. Season with extra sesame oil and black pepper."]
        }
      },
      {
        day:"Thursday", meal:"Baked Chicken & Lentil Stuffed Peppers with Feta",
        allergens:["Dairy","Egg","Wheat"], nutrition:["Iron","Zinc","Vitamin C","Protein","Calcium","Fibre"],
        nutritionNotes:"Red peppers baked = concentrated vitamin C — the highest C content of any veg. Lentils = iron + fibre. Chicken = zinc + protein. Feta = calcium.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"190°C / 375°F", time:"40 min",
          ingredients:["8 large red peppers, halved and deseeded","600g chicken mince (or finely diced chicken breast)","2 tins (400g) green lentils, drained","2 tins (400g) chopped tomatoes","1 tsp mild curry powder","½ tsp turmeric","½ tsp garlic powder","160g feta, crumbled","2 eggs, beaten (to bind)"],
          steps:["Preheat oven to 190°C. Mix chicken mince, lentils, half the tomatoes, garlic, cumin and beaten egg.","Fill each pepper half with the mixture. Pour remaining tomatoes into the base of the dish. Place peppers in dish.","Crumble feta over the top. Bake 38–40 mins until peppers are very soft and filling is cooked through.","BABY: Scoop filling out of one pepper half — the pepper itself will be very soft and can be cut into small pieces too. Mash filling lightly. The roasted red pepper is extremely high in vitamin C and boosts lentil and chicken iron significantly.","ADULTS: Serve pepper halves as is with extra tomato sauce from the dish."]
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
          steps:["Preheat oven to 200°C. Mix ground almonds and parmesan together.","Dip chicken breasts in beaten egg then press almond crust firmly on top.","Toss asparagus in olive oil. Arrange on tray around chicken.","Bake 28–30 mins until crust is golden and chicken is cooked through.","BABY: Reserve a small uncrusted chicken piece — bake plain alongside. Shred very finely. For the crust, mix a small amount of finely ground almond into baby's rice as a topping. Cut asparagus into 1cm pieces after roasting. Asparagus = vitamin C + iron + folate. Serve over soft brown rice.","ADULTS: Slice chicken and serve over brown rice with asparagus."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Prepare stuffed pepper filling (Thursday)",detail:"Mix chicken mince, lentils, tomatoes, garlic, cumin and egg. Store in a container in the fridge. On Thursday just fill the peppers and bake — the stuffing is completely ready."},
      {step:"2",title:"Grind almonds (Sunday)",detail:"Pulse almonds to very fine crumbs. Mix with parmesan. Store in a jar. On Sunday just dip salmon in egg and press crust on — takes 2 mins."},
      {step:"3",title:"Defrost edamame (Tuesday)",detail:"Move from freezer to fridge Monday evening."},
      {step:"4",title:"Cube sweet potatoes (Tuesday)",detail:"Peel and cube 2cm. Store in ziplock bag in fridge."},
      {step:"5",title:"Cook brown rice",detail:"Cook large batch. Cool. Bag into portions for Sunday and leftovers."},
      {step:"6",title:"Drain and bag lentils",detail:"Drain and rinse. Bag in portions for Thursday."}
    ],
    textures:["Cod: flake very finely and feel for bones with fingertips before every serve.","Stuffed pepper filling: already soft — mash lightly for baby. The pepper itself becomes very soft after 40 mins and can be cut into small pieces.","Edamame: ALWAYS press flat — never whole.","Asparagus: cut into 1cm pieces after roasting. Tips are soft; stalk end should be fork-tender — if not, microwave 1 min with water.","Almond crust (Sunday): must be ground to fine powder for baby — no visible nut pieces. Mix into rice as a topping rather than giving baby the crusted chicken directly.","Brown rice: add a splash of water when reheating to keep it moist and easy for baby to gum."],
    allergenCoverage:{hit:["Fish","Soy","Sesame","Dairy","Egg","Wheat","Tree Nuts"],skipped:["Peanut"]}
  },
  {
    title:"Week 6", nutritionFocus:"Full Nutritional Round-Up — Best of Everything",
    nutritionNote:"Final week hits every nutritional target: highest omega-3, maximum iron variety, full zinc coverage, vitamin C at every meal, and healthy fats in every dish. The strongest week nutritionally.",
    babyPortionNote:"By week 6 baby is approaching 11 months. Finger foods can now be slightly larger — strips and small chunks baby can pick up are ideal for pincer grip development. Keep supervising.",
    meals:[
      {
        day:"Tuesday", meal:"Sheet Pan Beef, Spinach & Kidney Bean Bake with Roasted Pepper",
        allergens:["Wheat","Egg","Dairy"], nutrition:["Iron","Zinc","Vitamin C","Protein","Calcium","Fibre"],
        nutritionNotes:"Triple iron hit: beef + spinach + kidney beans. Red pepper = maximum vitamin C to boost all three. Egg and cheese add calcium and additional iron. Highest single-meal iron content in the plan.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"190°C / 375°F", time:"40 min",
          ingredients:["800g lean beef mince","200g baby spinach, chopped","2 tins (400g) kidney beans, drained","4 red peppers, sliced","2 tins (400g) chopped tomatoes","1 tsp smoked paprika","1 tsp dried oregano","½ tsp garlic powder","3 eggs, beaten","100g cheddar, grated"],
          steps:["Preheat oven to 190°C. Brown beef mince 3 mins on hob. Drain fat.","Add spinach, kidney beans, tomatoes, garlic and cumin. Stir. Transfer to large baking dish.","Lay red pepper slices over the top. Pour beaten eggs over. Scatter cheddar over.","Bake 35 mins until set and golden on top.","BABY: Scoop a portion ensuring all three iron sources are included. Mash kidney beans. Break up any egg chunks. The red pepper on top = high vitamin C to boost beef, spinach and kidney bean iron simultaneously.","ADULTS: Serve from dish with crusty bread."]
        }
      },
      {
        day:"Thursday", meal:"Baked Beef & Lentil Stuffed Courgettes with Tomato Sauce & Avocado",
        allergens:["Fish","Egg","Wheat","Sesame"], nutrition:["Iron","Omega-3","Calcium","Vitamin C","Healthy Fats","Zinc"],
        nutritionNotes:"Beef = haem iron + zinc. Lentils = plant iron. Tomato sauce = vitamin C to boost both iron sources. Avocado = healthy fats + vitamin C. Sesame seeds = calcium. Double iron source meal.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"25 min",
          ingredients:["800g lean beef mince","2 tins (400g) green lentils, drained","8 large courgettes, halved lengthways","2 tins (400g) chopped tomatoes","1 tsp dried oregano","½ tsp smoked paprika","½ tsp garlic powder","1 tbsp sesame seeds, ground","2 ripe avocados","80g cheddar, grated"],
          steps:["Preheat oven to 190°C. Scoop out the inside of each courgette half to make a channel. Finely chop the scooped flesh.","Mix beef mince, lentils, courgette flesh, garlic powder and cumin. Fill each courgette half with the mixture.","Pour chopped tomatoes into the base of a large baking dish. Nestle stuffed courgettes in. Scatter grated cheddar over.","Bake 35–38 mins until beef is cooked through and courgette is very tender.","BABY: Scoop filling out of one courgette half — the courgette itself will be very soft and can also be cut into small pieces. Mash lentils in baby portion. Serve with mashed avocado for healthy fats and vitamin C. Sprinkle ground sesame seeds over. The tomato sauce provides vitamin C to boost beef and lentil iron.","ADULTS: Serve stuffed courgettes with extra tomato sauce from the dish."]
        }
      },
      {
        day:"Sunday", meal:"Baked Teriyaki Salmon with Peanut Soba Noodles & Pak Choi",
        allergens:["Fish","Peanut","Soy","Sesame","Wheat"], nutrition:["Omega-3","Iron","Zinc","Healthy Fats","Vitamin C","Protein"],
        nutritionNotes:"Salmon = DHA omega-3. Peanut butter = healthy fats + zinc. Soba noodles = iron + wholegrains. Pak choi = vitamin C + iron + calcium. Sesame = calcium + healthy fats. Covers 5 allergen groups in one meal.",
        baby:true,
        recipe:{
          serves:"2 adults + baby — serves 2 nights", temp:"200°C / 400°F", time:"25 min",
          ingredients:["4 salmon fillets","6 tbsp low-sodium soy sauce","2 tbsp sesame oil","1 tsp ginger powder","2 tbsp maple syrup (adults only)","6 tbsp smooth peanut butter (no added salt)","300ml low-sodium stock","400g soba noodles","4 heads pak choi, halved"],
          steps:["Preheat oven to 200°C. Mix soy and sesame oil. Reserve 2 tbsp for baby before adding maple syrup. Brush salmon with adult sauce.","Place salmon on lined tray. Bake 18–20 mins.","Whisk peanut butter with stock into a sauce. Cook soba noodles 5 mins. Steam pak choi 3 mins.","Toss noodles with peanut sauce.","BABY: Use reserved baby sauce on salmon. Flake very finely — check for bones. Cut noodles into 2cm pieces. Cut pak choi into small pieces. Thin peanut sauce with extra stock. The pak choi = vitamin C + iron to complement salmon and noodle iron.","ADULTS: Serve salmon over peanut noodles with pak choi."]
        }
      }
    ],
    prepChecklist:[
      {step:"1",title:"Make stuffed courgette filling (Thursday)",detail:"Mix beef mince, lentils, chopped courgette flesh, garlic and cumin. Store in a container in the fridge. On Thursday just fill the courgettes and pour tomatoes into the dish — done in 5 mins before going in the oven."},
      {step:"2",title:"Brown beef mince (Tuesday)",detail:"Brown 3 mins. Drain fat. Cool. Store in container. Tuesday just layer into baking dish with spinach, beans, tomatoes and eggs."},
      {step:"3",title:"Make peanut sauce (Sunday)",detail:"Whisk peanut butter with stock. Store in jar in fridge. Reheat gently Sunday."},
      {step:"4",title:"Marinate salmon (Sunday)",detail:"Reserve baby portion of teriyaki sauce before adding maple syrup. Coat salmon in adult sauce. Store in sealed bag in fridge."},
      {step:"5",title:"Cook soba noodles",detail:"Cook, rinse, toss in tiny bit of sesame oil. Bag in portions. Cut baby portion into 2cm pieces before bagging."},
      {step:"6",title:"Drain and bag lentils and kidney beans",detail:"Drain and rinse both. Bag separately. Fridge until needed. Lightly mash lentil portion with a fork before bagging — makes filling the courgettes faster on Thursday."}
    ],
    textures:["Beef bake (Tuesday): mash kidney beans throughout. Break up any egg that has set in chunks. Red pepper should be very soft — peel if skin is still firm.","Stuffed courgettes: scoop filling out for baby — already soft from baking. The courgette shell itself will be very tender after 38 mins and can be cut into small pieces too.","Avocado: mash fresh on the day — browns quickly once cut. A quarter avocado is plenty for baby.","Pak choi: steam until leaves are completely wilted and stalk is fork-tender. Cut stalk into very small pieces.","Soba noodles: always cut into 2cm pieces for baby — never long strands.","Salmon: flake finely as always. Feel for pin bones every single time."],
    allergenCoverage:{hit:["Wheat","Egg","Dairy","Fish","Sesame","Peanut","Soy"],skipped:["Tree Nuts"]}
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
    { name: "🥩 Meat & Fish", items: ["4 salmon fillets (150g each)","800g lean beef mince","4 chicken breasts"] },
    { name: "🥦 Fresh Veg", items: ["4 red peppers","4 medium sweet potatoes","300g kale, stems removed","200g baby spinach"] },
    { name: "🥫 Tins & Jars", items: ["2 tins green lentils (400g each)","4 tins chopped tomatoes (400g each)","Smooth peanut butter (no added salt/sugar)","2 tbsp Dijon mustard"] },
    { name: "🌾 Grains & Pasta", items: ["400g pasta (penne or fusilli)","60g breadcrumbs"] },
    { name: "🧀 Dairy & Eggs", items: ["100g full-fat cream cheese","Parmesan (80g)","2 eggs","Butter"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Garlic powder","Onion powder","Dried thyme","Dried oregano","Dried basil","Ginger powder"] },
  ]},
  { week: 2, categories: [
    { name: "🥩 Meat & Fish", items: ["4 trout fillets","4 chicken thighs (bone-in skin-on)","4 chicken breasts (Sunday)"] },
    { name: "🥦 Fresh Veg", items: ["1 large butternut squash","600g cherry tomatoes","400g broccoli florets","1 lemon"] },
    { name: "🥫 Tins & Jars", items: ["2 tins chickpeas (400g each)","4 tbsp tahini"] },
    { name: "🌾 Grains & Pasta", items: ["400g quinoa","800ml low-sodium veg stock","Brown rice (large bag — large batch needed)"] },
    { name: "🧀 Dairy & Eggs", items: ["160g feta cheese","4 eggs","Full-fat plain yoghurt"] },
    { name: "🥜 Nuts & Seeds", items: ["100g walnuts","100g cashews","Ground sesame seeds (jar)"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Maple syrup","Garlic powder","Dried thyme","Mild curry powder","Dried rosemary"] },
  ]},
  { week: 3, categories: [
    { name: "🥩 Meat & Fish", items: ["800g lamb mince","4 tins tuna in spring water (320g total drained)","4 chicken breasts"] },
    { name: "🥦 Fresh Veg", items: ["4 courgettes, sliced into half moons","200g cherry tomatoes, halved","400g broccoli florets","400g frozen edamame"] },
    { name: "🥫 Tins & Jars", items: ["2 tins green lentils (400g each)","4 tins chopped tomatoes (400g each)"] },
    { name: "🌾 Grains & Pasta", items: ["400g soba noodles"] },
    { name: "🧀 Dairy & Eggs", items: ["300g full-fat plain yoghurt","100g cheddar, grated","200ml whole milk","14 eggs","Butter"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Sesame seeds (to grind)","Maple syrup (adults only)","Garlic powder","Dried rosemary","Dried thyme","Ginger powder","Pitta bread (adults)"] },
  ]},
  { week: 4, categories: [
    { name: "🥩 Meat & Fish", items: ["4 chicken breasts (Tuesday)","800g lean beef mince","4 salmon fillets"] },
    { name: "🥦 Fresh Veg", items: ["4 medium sweet potatoes","400g frozen peas","2 ripe avocados","8 large carrots, sliced into coins"] },
    { name: "🥫 Tins & Jars", items: ["2 tins kidney beans (400g each)","2 tins green lentils (400g each)","4 tins chopped tomatoes (400g each)","4 tbsp tahini"] },
    { name: "🌾 Grains & Pasta", items: ["Brown rice (large bag — large batch needed)"] },
    { name: "🧀 Dairy & Eggs", items: ["100g full-fat cheddar, grated","4 eggs","100ml whole milk","60g butter","60g parmesan, grated"] },
    { name: "🥜 Nuts & Seeds", items: ["100g cashews (to grind)","Ground sesame seeds"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Garlic powder","Smoked paprika","Dried thyme","Dried oregano","Turmeric","Ginger powder"] },
  ]},
  { week: 5, categories: [
    { name: "🥩 Meat & Fish", items: ["4 cod fillets","600g chicken mince (or 4 chicken breasts, finely diced)","4 chicken breasts (Sunday)"] },
    { name: "🥦 Fresh Veg", items: ["4 medium sweet potatoes, peeled and cubed","400g frozen edamame, defrosted","8 large red peppers, halved and deseeded","400g asparagus, woody ends removed"] },
    { name: "🥫 Tins & Jars", items: ["2 tins green lentils (400g each)","2 tins chopped tomatoes (400g each)","4 tsp white miso paste (low sodium)"] },
    { name: "🌾 Grains & Pasta", items: ["Brown rice (large bag — large batch needed)"] },
    { name: "🧀 Dairy & Eggs", items: ["160g feta cheese","4 eggs","60g parmesan, grated","Full-fat plain yoghurt"] },
    { name: "🥜 Nuts & Seeds", items: ["160g almonds (to grind)","Ground sesame seeds (to sprinkle)"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Garlic powder","Ginger powder","Mild curry powder","Turmeric","Dried tarragon"] },
  ]},
  { week: 6, categories: [
    { name: "🥩 Meat & Fish", items: ["800g lean beef mince (Tuesday)","800g lean beef mince (Thursday stuffed courgettes)","4 salmon fillets"] },
    { name: "🥦 Fresh Veg", items: ["4 red peppers, sliced","200g baby spinach, chopped","8 large courgettes","4 heads pak choi, halved","2 ripe avocados"] },
    { name: "🥫 Tins & Jars", items: ["2 tins kidney beans (400g each)","4 tins green lentils (400g each)","4 tins chopped tomatoes (400g each)","Smooth peanut butter (no added salt/sugar)","300ml low-sodium stock (for peanut sauce)"] },
    { name: "🌾 Grains & Pasta", items: ["400g soba noodles"] },
    { name: "🧀 Dairy & Eggs", items: ["100g cheddar, grated","80g cheddar, grated (stuffed courgettes)","3 eggs"] },
    { name: "🥜 Nuts & Seeds", items: ["Ground sesame seeds (1 tbsp for stuffed courgettes)"] },
    { name: "🫙 Pantry & Oils", items: ["Olive oil","Low-sodium soy sauce","Sesame oil","Maple syrup (adults only)","Garlic powder","Smoked paprika","Dried oregano","Ginger powder"] },
  ]},
];


// ── Colour tokens ──────────────────────────────────────────────
const C = {
  bg:        "#f0fdf4",
  card:      "#ffffff",
  header:    "#14532d",
  headerSub: "#bbf7d0",
  accent:    "#166534",
  accentSoft:"#dcfce7",
  accentMid: "#86efac",
  cream:     "#fdf8ef",
  creamBorder:"#fde68a",
  text:      "#1e293b",
  textMid:   "#374151",
  textSoft:  "#6b7280",
  border:    "#e2e8f0",
  baby:      "#fdf3e3",
  babyBorder:"#fde68a",
  babyText:  "#78350f",
};

const NUTR_COLORS = {"Iron":"#dc2626","Zinc":"#7c3aed","Omega-3":"#0ea5e9","Vitamin C":"#f59e0b","Protein":"#16a34a","Healthy Fats":"#0d9488","Calcium":"#6366f1","Fibre":"#92400e"};

function NutrBadge({label}) {
  const c = NUTR_COLORS[label]||"#666";
  return <span style={{background:c+"14",color:c,border:`1px solid ${c}30`,borderRadius:"4px",padding:"2px 7px",fontSize:"10px",fontWeight:600,display:"inline-block",margin:"2px",fontFamily:"system-ui,sans-serif",letterSpacing:"0.2px"}}>{label}</span>;
}

const ALLERGEN_COLORS = {"Egg":"#f59e0b","Peanut":"#92400e","Fish":"#0ea5e9","Wheat":"#d97706","Tree Nuts":"#16a34a","Soy":"#7c3aed","Sesame":"#dc2626","Dairy":"#6366f1"};

function AllergenBadge({label}) {
  const c = ALLERGEN_COLORS[label]||"#666";
  return <span style={{background:c+"12",color:c,border:`1px solid ${c}30`,borderRadius:"20px",padding:"2px 9px",fontSize:"10px",fontWeight:500,display:"inline-block",margin:"2px",fontFamily:"system-ui,sans-serif"}}>{label}</span>;
}

// Bowl + spoon SVG icon
function BowlIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin:"0 auto 8px",display:"block"}}>
      <ellipse cx="24" cy="28" rx="16" ry="8" stroke="#c8d9c9" strokeWidth="2" fill="none"/>
      <path d="M8 28 C8 36 16 42 24 42 C32 42 40 36 40 28" stroke="#c8d9c9" strokeWidth="2" fill="#edf3ee" strokeLinecap="round"/>
      <ellipse cx="24" cy="28" rx="16" ry="8" fill="#edf3ee" stroke="#c8d9c9" strokeWidth="2"/>
      <path d="M34 10 C34 10 36 14 36 18 C36 20 35 21 34 21 C33 21 32 20 32 18 L32 10" stroke="#c8d9c9" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M34 21 L34 30" stroke="#c8d9c9" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="20" cy="26" rx="4" ry="2" fill="#c8d9c9" opacity="0.5"/>
    </svg>
  );
}

const SF = "Georgia,'Times New Roman',serif";
const SS = "system-ui,-apple-system,sans-serif";

export default function App() {
  const [tab, setTab] = useState(0);
  const [section, setSection] = useState("meals");
  const [glossaryTarget, setGlossaryTarget] = useState(null);
  const week = WEEKS[tab];

  const goToRecipe = (weekIndex, mealIndex) => {
    setTab(weekIndex);
    setSection("recipes");
    setGlossaryTarget({weekIndex, mealIndex});
    setTimeout(() => {
      const el = document.getElementById(`recipe-${weekIndex}-${mealIndex}`);
      if (el) el.scrollIntoView({behavior:"smooth", block:"start"});
    }, 100);
  };

  return (
    <div style={{minHeight:"100vh",background:C.bg,fontFamily:SS}}>

      {/* ── Header ── */}
      <div style={{background:C.header,padding:"28px 20px 24px",textAlign:"center"}}>
        <BowlIcon/>
        <h1 style={{color:"#f0ebe0",fontSize:"22px",fontWeight:"normal",fontFamily:SF,margin:"0 0 4px",letterSpacing:"0.3px"}}>Family Meal Plan</h1>
        <p style={{color:C.headerSub,fontSize:"11px",fontFamily:SS,letterSpacing:"0.8px",textTransform:"uppercase",margin:0}}>6 weeks · oven-first · baby-friendly · prep monday</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:"5px",justifyContent:"center",marginTop:"14px"}}>
          {Object.entries(NUTR_COLORS).map(([k,c])=>(
            <span key={k} style={{background:c+"25",color:"#e8f0e8",border:`1px solid ${c}40`,borderRadius:"4px",padding:"2px 8px",fontSize:"10px",fontFamily:SS,letterSpacing:"0.2px"}}>{k}</span>
          ))}
        </div>
      </div>

      <div style={{maxWidth:"960px",margin:"0 auto",padding:"18px 14px"}}>

        {/* ── Week tabs ── */}
        <div style={{display:"flex",gap:"6px",marginBottom:"12px",flexWrap:"wrap"}}>
          {WEEKS.map((_,i)=>(
            <button key={i} onClick={()=>{setTab(i);setGlossaryTarget(null);}} style={{padding:"8px 18px",borderRadius:"24px",border:`1.5px solid ${tab===i?C.accent:C.accentMid}`,cursor:"pointer",fontWeight:tab===i?600:400,fontSize:"13px",fontFamily:SF,background:tab===i?C.accent:C.card,color:tab===i?"#f0ebe0":C.accent,transition:"all 0.15s"}}>
              Week {i+1}
            </button>
          ))}
        </div>

        {/* ── Section tabs ── */}
        <div style={{display:"flex",gap:"4px",marginBottom:"14px",flexWrap:"wrap"}}>
          {[["meals","Meals"],["recipes","Recipes"],["prep","Monday Prep"],["textures","Textures"],["allergens","Allergens"],["snacks","Snacks"],["grocery","Grocery"],["glossary","Glossary"]].map(([id,label])=>(
            <button key={id} onClick={()=>{setSection(id);setGlossaryTarget(null);}} style={{padding:"5px 12px",borderRadius:"6px",border:`1px solid ${section===id?C.accent:C.border}`,cursor:"pointer",fontSize:"11px",fontFamily:SS,fontWeight:section===id?600:400,background:section===id?C.accentSoft:C.card,color:section===id?C.accent:C.textSoft,transition:"all 0.15s",letterSpacing:"0.1px"}}>
              {label}
            </button>
          ))}
        </div>

        {/* ── Nutrition banner ── */}
        {section !== "glossary" && (
          <>
            <div style={{background:C.header,borderRadius:"12px",padding:"12px 16px",marginBottom:"8px",display:"flex",gap:"10px",alignItems:"flex-start"}}>
              <div>
                <p style={{color:"#c8d9c9",fontWeight:600,fontSize:"13px",fontFamily:SF,fontStyle:"italic",margin:"0 0 3px"}}>{week.nutritionFocus}</p>
                <p style={{color:"#d8e8d8",fontSize:"11px",fontFamily:SS,margin:0,lineHeight:1.6}}>{week.nutritionNote}</p>
              </div>
            </div>
            <div style={{background:C.baby,border:`1px solid ${C.babyBorder}`,borderRadius:"10px",padding:"9px 14px",marginBottom:"12px"}}>
              <p style={{color:C.babyText,fontSize:"11px",fontFamily:SS,margin:0,lineHeight:1.6}}>👶 <strong>Baby this week:</strong> {week.babyPortionNote}</p>
            </div>
          </>
        )}

        {/* ── Main card ── */}
        <div style={{background:C.card,borderRadius:"18px",padding:"22px",border:`1px solid ${C.border}`}}>

          {/* MEALS */}
          {section==="meals" && (
            <div>
              {week.meals.map((m,i)=>(
                <div key={i} style={{marginBottom:"16px",background:C.bg,borderRadius:"14px",padding:"14px 16px",border:`1px solid ${C.border}`}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"6px",marginBottom:"8px"}}>
                    <span style={{fontSize:"10px",fontWeight:600,color:C.accent,background:C.accentSoft,borderRadius:"20px",padding:"3px 10px",fontFamily:SS,letterSpacing:"0.5px",textTransform:"uppercase"}}>{m.day}</span>
                    <span style={{fontSize:"11px",color:C.textSoft,fontFamily:SS}}>{m.recipe.temp} · {m.recipe.time}</span>
                  </div>
                  <p style={{fontWeight:"normal",fontFamily:SF,color:C.text,fontSize:"15px",margin:"0 0 8px",lineHeight:1.4}}>{m.meal}</p>
                  <div style={{marginBottom:"6px"}}>{m.nutrition.map(n=><NutrBadge key={n} label={n}/>)}</div>
                  <p style={{fontSize:"11px",color:C.textMid,margin:"4px 0 8px",lineHeight:1.6,fontFamily:SS,fontStyle:"italic"}}>{m.nutritionNotes}</p>
                  <div>{m.allergens.map(a=><AllergenBadge key={a} label={a}/>)}</div>
                </div>
              ))}
            </div>
          )}

          {/* RECIPES */}
          {section==="recipes" && (
            <div>
              {week.meals.map((m,i)=>(
                <div key={i} id={`recipe-${tab}-${i}`} style={{marginBottom:"28px",borderBottom:i<week.meals.length-1?`1px solid ${C.border}`:"none",paddingBottom:"24px"}}>
                  <div style={{marginBottom:"12px"}}>
                    <span style={{fontSize:"10px",fontWeight:600,color:C.accent,background:C.accentSoft,borderRadius:"20px",padding:"3px 10px",fontFamily:SS,letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:"8px",display:"inline-block"}}>{m.day}</span>
                    <h3 style={{color:C.text,fontSize:"17px",fontWeight:"normal",fontFamily:SF,margin:"6px 0 8px",lineHeight:1.3}}>{m.meal}</h3>
                    <div style={{display:"flex",flexWrap:"wrap",gap:"5px"}}>
                      <span style={{background:C.accentSoft,color:C.accent,borderRadius:"6px",padding:"2px 8px",fontSize:"10px",fontFamily:SS,fontWeight:600}}>{m.recipe.temp}</span>
                      <span style={{background:C.cream,color:C.babyText,borderRadius:"6px",padding:"2px 8px",fontSize:"10px",fontFamily:SS,fontWeight:600,border:`1px solid ${C.creamBorder}`}}>{m.recipe.time}</span>
                      <span style={{background:C.cream,color:C.textMid,borderRadius:"6px",padding:"2px 8px",fontSize:"10px",fontFamily:SS,border:`1px solid ${C.creamBorder}`}}>{m.recipe.serves}</span>
                    </div>
                  </div>
                  <div style={{background:C.accentSoft,borderRadius:"8px",padding:"10px 12px",marginBottom:"14px",borderLeft:`3px solid ${C.accent}`}}>
                    <p style={{fontSize:"11px",color:C.textMid,fontFamily:SS,margin:0,lineHeight:1.6,fontStyle:"italic"}}>{m.nutritionNotes}</p>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"16px"}}>
                    <div>
                      <p style={{fontSize:"10px",fontWeight:600,color:C.textSoft,fontFamily:SS,textTransform:"uppercase",letterSpacing:"0.8px",margin:"0 0 8px"}}>Ingredients</p>
                      {m.recipe.ingredients.map((ing,j)=>(
                        <div key={j} style={{display:"flex",gap:"8px",marginBottom:"5px",alignItems:"flex-start"}}>
                          <span style={{color:C.accentMid,fontWeight:700,flexShrink:0,fontSize:"14px",lineHeight:1.3}}>·</span>
                          <span style={{fontSize:"12px",color:C.text,fontFamily:SS,lineHeight:1.5}}>{ing}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{fontSize:"10px",fontWeight:600,color:C.textSoft,fontFamily:SS,textTransform:"uppercase",letterSpacing:"0.8px",margin:"0 0 8px"}}>Method</p>
                      {m.recipe.steps.map((step,j)=>{
                        const isBaby=step.startsWith("BABY");
                        const isAdult=step.startsWith("ADULT");
                        return (
                          <div key={j} style={{display:"flex",gap:"8px",marginBottom:"8px",alignItems:"flex-start"}}>
                            <span style={{background:isBaby?C.cream:isAdult?C.accentSoft:C.accentSoft,color:isBaby?C.babyText:C.accent,borderRadius:"50%",width:"18px",height:"18px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:700,flexShrink:0,marginTop:"1px",fontFamily:SS,border:`1px solid ${isBaby?C.creamBorder:C.accentMid}`}}>{j+1}</span>
                            <span style={{fontSize:"11px",color:isBaby?C.babyText:isAdult?C.accent:C.text,lineHeight:1.6,fontWeight:isBaby||isAdult?600:400,fontFamily:SS}}>{step}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PREP */}
          {section==="prep" && (
            <div>
              <div style={{background:C.cream,border:`1px solid ${C.creamBorder}`,borderRadius:"10px",padding:"10px 14px",marginBottom:"16px"}}>
                <p style={{fontSize:"12px",fontWeight:600,color:C.babyText,fontFamily:SS,margin:0}}>Complete all steps on Monday in this order</p>
                <p style={{fontSize:"11px",color:C.babyText,fontFamily:SS,margin:"3px 0 0",opacity:0.8}}>Label every bag with the day and meal name.</p>
              </div>
              {week.prepChecklist.map((item,i)=>(
                <div key={i} style={{display:"flex",gap:"12px",marginBottom:"10px",alignItems:"flex-start",background:C.bg,borderRadius:"12px",padding:"12px 14px",border:`1px solid ${C.border}`}}>
                  <span style={{background:C.accent,color:"#f0ebe0",borderRadius:"50%",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:600,flexShrink:0,fontFamily:SS}}>{item.step}</span>
                  <div>
                    <p style={{fontSize:"13px",fontFamily:SF,fontWeight:"normal",color:C.text,margin:"0 0 3px"}}>{item.title}</p>
                    <p style={{fontSize:"11px",color:C.textMid,fontFamily:SS,margin:0,lineHeight:1.6}}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TEXTURES */}
          {section==="textures" && (
            <div>
              <div style={{background:C.cream,border:`1px solid ${C.creamBorder}`,borderRadius:"10px",padding:"10px 14px",marginBottom:"14px"}}>
                <p style={{fontSize:"12px",fontWeight:600,color:C.babyText,fontFamily:SS,margin:0}}>Always supervise mealtimes · Never leave baby alone while eating</p>
              </div>
              {week.textures.map((item,i)=>(
                <div key={i} style={{display:"flex",gap:"10px",marginBottom:"10px",alignItems:"flex-start",padding:"10px 0",borderBottom:`1px solid ${C.border}`}}>
                  <span style={{color:C.accentMid,flexShrink:0,fontSize:"18px",lineHeight:1}}>·</span>
                  <span style={{fontSize:"12px",color:C.text,fontFamily:SS,lineHeight:1.7}}>{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* ALLERGENS */}
          {section==="allergens" && (
            <div>
              <p style={{fontSize:"12px",color:C.textMid,fontFamily:SS,margin:"0 0 14px"}}>Target: cover at least 6 of 8 allergen groups every week.</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"16px"}}>
                {ALLERGENS.map(a=>{
                  const hit=week.allergenCoverage.hit.includes(a);
                  const c=ALLERGEN_COLORS[a]||"#666";
                  return (
                    <div key={a} style={{display:"flex",alignItems:"center",gap:"8px",background:hit?c+"10":C.bg,border:`1px solid ${hit?c+"35":C.border}`,borderRadius:"10px",padding:"8px 14px",minWidth:"110px"}}>
                      <span style={{width:"8px",height:"8px",borderRadius:"50%",background:hit?c:"#ccc",flexShrink:0,display:"inline-block"}}/>
                      <div>
                        <div style={{fontSize:"12px",fontFamily:SS,fontWeight:600,color:hit?c:C.textSoft}}>{a}</div>
                        <div style={{fontSize:"10px",fontFamily:SS,color:hit?c:C.textSoft,opacity:0.8}}>{hit?"Covered":"Skipped"}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{background:C.accentSoft,borderRadius:"10px",padding:"10px 14px",border:`1px solid ${C.accentMid}`}}>
                <span style={{fontSize:"12px",fontWeight:600,color:C.accent,fontFamily:SS}}>{week.allergenCoverage.hit.length}/8 allergen groups covered this week</span>
              </div>
            </div>
          )}

          {/* SNACKS */}
          {section==="snacks" && (
            <div>
              <div style={{background:C.cream,border:`1px solid ${C.creamBorder}`,borderRadius:"10px",padding:"10px 14px",marginBottom:"18px"}}>
                <p style={{fontSize:"13px",fontFamily:SF,fontWeight:"normal",color:C.babyText,margin:"0 0 2px"}}>Baby Snack Bank</p>
                <p style={{fontSize:"11px",color:C.babyText,fontFamily:SS,margin:0,opacity:0.85}}>Core snacks every week, plus rotating extras to keep allergen exposure varied.</p>
              </div>
              <p style={{fontSize:"10px",fontWeight:600,color:C.textSoft,fontFamily:SS,textTransform:"uppercase",letterSpacing:"0.8px",margin:"0 0 10px"}}>Every week</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr",gap:"8px",marginBottom:"22px"}}>
                {CORE_SNACKS.map((s,i)=>(
                  <div key={i} style={{background:C.bg,borderRadius:"10px",padding:"11px 14px",border:`1px solid ${C.border}`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"8px",flexWrap:"wrap",marginBottom:"4px"}}>
                      <p style={{fontSize:"13px",fontFamily:SF,fontWeight:"normal",color:C.text,margin:0}}>{s.name}</p>
                      <div>{s.nutrition.map(n=><NutrBadge key={n} label={n}/>)}</div>
                    </div>
                    <p style={{fontSize:"11px",color:C.textMid,fontFamily:SS,margin:0,lineHeight:1.5}}>{s.notes}</p>
                  </div>
                ))}
              </div>
              <p style={{fontSize:"10px",fontWeight:600,color:C.textSoft,fontFamily:SS,textTransform:"uppercase",letterSpacing:"0.8px",margin:"0 0 10px"}}>This week's extras — {week.title}</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr",gap:"8px"}}>
                {WEEKLY_SNACKS.find(w=>w.week===tab+1)?.extras.map((s,i)=>(
                  <div key={i} style={{background:C.accentSoft,borderRadius:"10px",padding:"11px 14px",border:`1px solid ${C.accentMid}`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"8px",flexWrap:"wrap",marginBottom:"4px"}}>
                      <p style={{fontSize:"13px",fontFamily:SF,fontWeight:"normal",color:C.accent,margin:0}}>{s.name}</p>
                      <div>{s.nutrition.map(n=><NutrBadge key={n} label={n}/>)}</div>
                    </div>
                    <p style={{fontSize:"11px",color:C.textMid,fontFamily:SS,margin:0,lineHeight:1.5}}>{s.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GROCERY */}
          {section==="grocery" && (
            <div>
              <div style={{background:C.accentSoft,border:`1px solid ${C.accentMid}`,borderRadius:"10px",padding:"10px 14px",marginBottom:"18px"}}>
                <p style={{fontSize:"13px",fontFamily:SF,fontWeight:"normal",color:C.accent,margin:"0 0 2px"}}>{week.title} Shopping List</p>
                <p style={{fontSize:"11px",color:C.textMid,fontFamily:SS,margin:0}}>Everything for this week's 3 dinners. Check your pantry for staples first.</p>
              </div>
              {GROCERY_LISTS.find(g=>g.week===tab+1)?.categories.map((cat,i)=>(
                <div key={i} style={{marginBottom:"16px"}}>
                  <p style={{fontSize:"11px",fontWeight:600,color:C.textMid,fontFamily:SS,textTransform:"uppercase",letterSpacing:"0.6px",margin:"0 0 6px"}}>{cat.name}</p>
                  <div style={{background:C.bg,borderRadius:"10px",padding:"10px 14px",border:`1px solid ${C.border}`}}>
                    {cat.items.map((item,j)=>(
                      <div key={j} style={{display:"flex",alignItems:"center",gap:"10px",padding:"6px 0",borderBottom:j<cat.items.length-1?`1px solid ${C.border}`:"none"}}>
                        <span style={{width:"15px",height:"15px",border:`1.5px solid ${C.accentMid}`,borderRadius:"3px",flexShrink:0,display:"inline-block"}}/>
                        <span style={{fontSize:"12px",color:C.text,fontFamily:SS}}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{background:C.cream,border:`1px solid ${C.creamBorder}`,borderRadius:"10px",padding:"10px 14px",marginTop:"4px"}}>
                <p style={{fontSize:"11px",color:C.babyText,fontFamily:SS,margin:0,lineHeight:1.6}}><strong>Pantry staples to keep stocked:</strong> olive oil, low-sodium soy sauce, sesame oil, garlic powder, ground sesame seeds, full-fat plain yoghurt, eggs, butter.</p>
              </div>
            </div>
          )}

          {/* GLOSSARY */}
          {section==="glossary" && (
            <div>
              <p style={{fontSize:"12px",color:C.textMid,fontFamily:SS,margin:"0 0 16px"}}>All 18 meals across 6 weeks. Tap any meal to jump to its full recipe.</p>
              {WEEKS.map((w,wi)=>(
                <div key={wi} style={{marginBottom:"20px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"8px"}}>
                    <span style={{background:C.accent,color:"#f0ebe0",borderRadius:"6px",padding:"3px 10px",fontSize:"11px",fontFamily:SS,fontWeight:600}}>{w.title}</span>
                    <span style={{fontSize:"11px",color:C.textSoft,fontFamily:SF,fontStyle:"italic"}}>{w.nutritionFocus}</span>
                  </div>
                  {w.meals.map((m,mi)=>(
                    <button key={mi} onClick={()=>goToRecipe(wi,mi)} style={{display:"flex",alignItems:"flex-start",gap:"10px",width:"100%",marginBottom:"6px",background:C.bg,border:`1px solid ${C.border}`,borderRadius:"12px",padding:"11px 14px",cursor:"pointer",textAlign:"left",transition:"all 0.15s"}}
                      onMouseEnter={e=>{e.currentTarget.style.background=C.accentSoft;e.currentTarget.style.borderColor=C.accentMid;}}
                      onMouseLeave={e=>{e.currentTarget.style.background=C.bg;e.currentTarget.style.borderColor=C.border;}}>
                      <div style={{flexShrink:0,marginTop:"2px"}}>
                        <span style={{fontSize:"10px",fontWeight:600,color:C.accent,background:C.accentSoft,borderRadius:"4px",padding:"2px 7px",fontFamily:SS,letterSpacing:"0.3px",textTransform:"uppercase"}}>{m.day}</span>
                      </div>
                      <div style={{flex:1}}>
                        <p style={{fontSize:"13px",fontFamily:SF,fontWeight:"normal",color:C.text,margin:"0 0 4px",lineHeight:1.3}}>{m.meal}</p>
                        <div>{m.nutrition.map(n=><NutrBadge key={n} label={n}/>)}</div>
                      </div>
                      <span style={{color:C.accentMid,fontSize:"18px",flexShrink:0,marginTop:"2px"}}>→</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
