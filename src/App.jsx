import { useState } from "react";
import { ALLERGENS, COLORS, NUTR_COLORS, WEEKS, ALL_MEALS, CORE_SNACKS, WEEKLY_SNACKS, GROCERY_LISTS } from './data.jsx';

// Meals where ground beef or lamb needs a temp cue
const GROUND_MEAT_TEMP = "160°F / 71°C";
const GROUND_MEAT_MEALS = new Set([
  "Baked Beef & Spinach Meatballs in Tomato Sauce with Pasta",
  "Japanese Beef & Shiitake Mushroom Bake with Brown Rice",
  "Baked Lamb & Lentil One-Pan with Roasted Courgette & Yoghurt",
  "Polenta Bake with Zucchini, Tomato & Beef Ragout",
  "Sheet Pan Beef, Spinach & Kidney Bean Bake with Roasted Pepper",
]);

export default function App() {
  const [tab, setTab] = useState(0);
  const [section, setSection] = useState("meals");
  const [glossaryTarget, setGlossaryTarget] = useState(null);
  const [checked, setChecked] = useState({});
  const week = WEEKS[tab];

  const toggleItem = (key) => setChecked(prev => ({...prev, [key]: !prev[key]}));
  const clearChecked = (weekNum) => setChecked(prev => {
    const next = {...prev};
    Object.keys(next).filter(k=>k.startsWith(`w${weekNum}-`)).forEach(k=>delete next[k]);
    return next;
  });

  const goToRecipe = (weekIndex, mealIndex) => {
    setTab(weekIndex);
    setSection("recipes");
    setGlossaryTarget({weekIndex, mealIndex});
    setTimeout(() => {
      const el = document.getElementById(`recipe-${weekIndex}-${mealIndex}`);
      if (el) el.scrollIntoView({behavior:"smooth", block:"start"});
    }, 100);
  };

  const handlePrint = () => window.print();

  const SECTIONS = [
    ["meals","🍽️ Meals"],["recipes","📖 Recipes"],["prep","📦 Monday Prep"],
    ["babyprep","🥣 Sunday Baby Prep"],["textures","👶 Textures"],
    ["allergens","🌿 Allergens"],["snacks","🍌 Snacks"],["grocery","🛒 Grocery"],["glossary","📋 Glossary"]
  ];

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          body { font-size: 11px; }
          .print-section { display: block !important; }
          #print-all .print-week { page-break-before: always; }
        }
        @media screen {
          .print-only { display: none !important; }
        }
      `}</style>

      <div style={{minHeight:"100vh",background:"#f0fdf4",fontFamily:"system-ui,sans-serif"}}>
        {/* Header */}
        <div className="no-print" style={{background:"linear-gradient(135deg,#14532d,#15803d)",padding:"28px 20px",textAlign:"center"}}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin:"0 auto 8px",display:"block"}}>
            <path d="M8 28 C8 36 16 42 24 42 C32 42 40 36 40 28" stroke="#bbf7d0" strokeWidth="2" fill="#1a6b3a" strokeLinecap="round"/>
            <ellipse cx="24" cy="28" rx="16" ry="8" fill="#1a6b3a" stroke="#bbf7d0" strokeWidth="2"/>
            <path d="M34 10 C34 10 36 14 36 18 C36 20 35 21 34 21 C33 21 32 20 32 18 L32 10" stroke="#bbf7d0" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M34 21 L34 30" stroke="#bbf7d0" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="20" cy="26" rx="4" ry="2" fill="#bbf7d0" opacity="0.4"/>
          </svg>
          <h1 style={{color:"white",fontSize:"22px",fontWeight:"normal",fontFamily:"Georgia,'Times New Roman',serif",margin:"0 0 4px",letterSpacing:"0.3px"}}>Family Meal Plan</h1>
          <p style={{color:"#bbf7d0",fontSize:"11px",marginTop:"4px"}}>Nutritionally optimised · Oven-first · Baby-friendly · Prep Monday</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:"4px",justifyContent:"center",marginTop:"8px"}}>
            {Object.entries(NUTR_COLORS).map(([k,c])=>(
              <span key={k} style={{background:c+"33",color:"white",border:`1px solid ${c}55`,borderRadius:"6px",padding:"2px 7px",fontSize:"10px",fontWeight:600}}>{k}</span>
            ))}
          </div>
        </div>

        <div style={{maxWidth:"960px",margin:"0 auto",padding:"16px 12px"}}>
          {/* Week tabs */}
          <div className="no-print" style={{display:"flex",gap:"6px",marginBottom:"10px",flexWrap:"wrap"}}>
            {WEEKS.map((_,i)=>(
              <button key={i} onClick={()=>{setTab(i);setGlossaryTarget(null);}} style={{padding:"8px 16px",borderRadius:"999px",border:"none",cursor:"pointer",fontWeight:700,fontSize:"12px",background:tab===i?"#166534":"white",color:tab===i?"white":"#374151",boxShadow:tab===i?"0 4px 12px #16653440":"0 1px 4px rgba(0,0,0,0.08)",transition:"all 0.15s"}}>
                Week {i+1}
              </button>
            ))}
          </div>

          {/* Section tabs */}
          <div className="no-print" style={{display:"flex",gap:"5px",marginBottom:"10px",flexWrap:"wrap",alignItems:"center"}}>
            {SECTIONS.map(([id,label])=>(
              <button key={id} onClick={()=>{setSection(id);setGlossaryTarget(null);}} style={{padding:"6px 12px",borderRadius:"8px",border:`1px solid ${section===id?"#166534":"#e2e8f0"}`,cursor:"pointer",fontSize:"11px",fontWeight:600,background:section===id?"#f0fdf4":"white",color:section===id?"#166534":"#6b7280",transition:"all 0.15s"}}>
                {label}
              </button>
            ))}
            {/* Print button */}
            <button onClick={handlePrint} style={{marginLeft:"auto",padding:"6px 14px",borderRadius:"8px",border:"1px solid #e2e8f0",cursor:"pointer",fontSize:"11px",fontWeight:600,background:"white",color:"#6b7280",display:"flex",alignItems:"center",gap:"5px",transition:"all 0.15s"}}
              onMouseEnter={e=>{e.currentTarget.style.background="#f0fdf4";e.currentTarget.style.borderColor="#166534";e.currentTarget.style.color="#166534";}}
              onMouseLeave={e=>{e.currentTarget.style.background="white";e.currentTarget.style.borderColor="#e2e8f0";e.currentTarget.style.color="#6b7280";}}>
              🖨️ Print
            </button>
          </div>

          {/* Nutrition banner (not on glossary or babyprep) */}
          {section !== "glossary" && section !== "babyprep" && (
            <>
              <div style={{background:"#166534",borderRadius:"10px",padding:"10px 14px",marginBottom:"8px",display:"flex",gap:"8px",alignItems:"flex-start"}}>
                <span style={{fontSize:"16px"}}>🎯</span>
                <div>
                  <p style={{color:"#bbf7d0",fontWeight:700,fontSize:"12px",margin:"0 0 2px"}}>{week.nutritionFocus}</p>
                  <p style={{color:"#dcfce7",fontSize:"11px",margin:0,lineHeight:1.5}}>{week.nutritionNote}</p>
                </div>
              </div>
              <div style={{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:"10px",padding:"8px 12px",marginBottom:"10px"}}>
                <p style={{color:"#78350f",fontSize:"11px",margin:0,lineHeight:1.5}}>👶 <strong>Baby this week:</strong> {week.babyPortionNote}</p>
              </div>
            </>
          )}

          <div style={{background:"white",borderRadius:"16px",padding:"20px",boxShadow:"0 4px 24px rgba(0,0,0,0.07)",border:"1px solid #e2e8f0"}}>

            {/* MEALS TAB */}
            {section==="meals" && (
              <div>
                {week.meals.map((m,i)=>(
                  <button key={i} onClick={()=>goToRecipe(tab,i)} style={{display:"block",width:"100%",textAlign:"left",marginBottom:"14px",background:"#f8fafc",borderRadius:"12px",padding:"12px 14px",border:"1px solid #e2e8f0",cursor:"pointer",transition:"all 0.15s"}}
                    onMouseEnter={e=>{e.currentTarget.style.background="#f0fdf4";e.currentTarget.style.borderColor="#166534";}}
                    onMouseLeave={e=>{e.currentTarget.style.background="#f8fafc";e.currentTarget.style.borderColor="#e2e8f0";}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"6px",marginBottom:"6px"}}>
                      <span style={{fontSize:"11px",fontWeight:700,color:"#166534",background:"#dcfce7",borderRadius:"6px",padding:"2px 8px"}}>{m.day}</span>
                      <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                        <span style={{fontSize:"11px",color:"#6b7280"}}>🌡️ {m.recipe.temp} · ⏱️ {m.recipe.time}</span>
                        <span style={{fontSize:"11px",color:"#16a34a",fontWeight:700}}>→ Recipe</span>
                      </div>
                    </div>
                    <p style={{fontWeight:700,color:"#1e293b",fontSize:"13px",margin:"0 0 6px"}}>{m.meal}</p>
                    {GROUND_MEAT_MEALS.has(m.meal) && (
                      <div style={{display:"inline-flex",alignItems:"center",gap:"5px",background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:"6px",padding:"2px 8px",marginBottom:"5px"}}>
                        <span style={{fontSize:"10px"}}>🥩</span>
                        <span style={{fontSize:"10px",fontWeight:700,color:"#9a3412"}}>Ground meat: cook to {GROUND_MEAT_TEMP}</span>
                      </div>
                    )}
                    <div style={{marginBottom:"5px"}}>{m.nutrition.map(n=><NutrBadge key={n} label={n}/>)}</div>
                    <p style={{fontSize:"11px",color:"#6b7280",margin:"4px 0 6px",lineHeight:1.5,fontStyle:"italic"}}>{m.nutritionNotes}</p>
                    <div>{m.allergens.map(a=><AllergenBadge key={a} label={a}/>)}</div>
                  </button>
                ))}
              </div>
            )}

            {/* RECIPES TAB */}
            {section==="recipes" && (
              <div>
                {week.meals.map((m,i)=>(
                  <div key={i} id={`recipe-${tab}-${i}`} style={{marginBottom:"24px",borderBottom:i<week.meals.length-1?"2px solid #f1f5f9":"none",paddingBottom:"20px"}}>
                    <div style={{display:"flex",flexWrap:"wrap",gap:"5px",alignItems:"center",marginBottom:"10px"}}>
                      <h3 style={{color:"#14532d",fontSize:"14px",fontWeight:800,margin:"0 0 4px",width:"100%"}}>{m.meal}</h3>
                      <span style={{background:"#dcfce7",color:"#166534",borderRadius:"6px",padding:"2px 7px",fontSize:"10px",fontWeight:700}}>🌡️ {m.recipe.temp}</span>
                      <span style={{background:"#fef9c3",color:"#92400e",borderRadius:"6px",padding:"2px 7px",fontSize:"10px",fontWeight:700}}>⏱️ {m.recipe.time}</span>
                      <span style={{background:"#f0f9ff",color:"#0369a1",borderRadius:"6px",padding:"2px 7px",fontSize:"10px",fontWeight:700}}>👨‍👩‍👶 {m.recipe.serves}</span>
                      {GROUND_MEAT_MEALS.has(m.meal) && (
                        <span style={{background:"#fff7ed",color:"#9a3412",border:"1px solid #fed7aa",borderRadius:"6px",padding:"2px 7px",fontSize:"10px",fontWeight:700}}>🥩 Ground meat: {GROUND_MEAT_TEMP}</span>
                      )}
                    </div>
                    <div style={{background:"#f0fdf4",borderRadius:"8px",padding:"8px 10px",marginBottom:"10px"}}>
                      <p style={{fontSize:"10px",fontWeight:700,color:"#166534",margin:"0 0 3px",textTransform:"uppercase",letterSpacing:"0.05em"}}>Nutrition</p>
                      <p style={{fontSize:"11px",color:"#374151",margin:0,lineHeight:1.5}}>{m.nutritionNotes}</p>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
                      <div>
                        <p style={{fontSize:"10px",fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:"0.05em",margin:"0 0 6px"}}>Ingredients</p>
                        {m.recipe.ingredients.map((ing,j)=>(
                          <div key={j} style={{display:"flex",gap:"6px",marginBottom:"4px"}}>
                            <span style={{color:"#16a34a",fontWeight:800,flexShrink:0,fontSize:"12px"}}>•</span>
                            <span style={{fontSize:"11px",color:"#374151"}}>{ing}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p style={{fontSize:"10px",fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:"0.05em",margin:"0 0 6px"}}>Steps</p>
                        {m.recipe.steps.map((step,j)=>{
                          const isBaby=step.startsWith("BABY");
                          const isAdult=step.startsWith("ADULT");
                          return (
                            <div key={j} style={{display:"flex",gap:"6px",marginBottom:"7px",alignItems:"flex-start"}}>
                              <span style={{background:isBaby?"#fef9c3":isAdult?"#dbeafe":"#dcfce7",color:isBaby?"#92400e":isAdult?"#1d4ed8":"#166534",borderRadius:"50%",width:"18px",height:"18px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:700,flexShrink:0,marginTop:"1px"}}>{j+1}</span>
                              <span style={{fontSize:"11px",color:isBaby?"#92400e":isAdult?"#1d4ed8":"#374151",lineHeight:1.6,fontWeight:isBaby||isAdult?600:400}}>{step}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {m.recipe.attribution && (
                      <p style={{fontSize:"10px",color:"#9ca3af",fontStyle:"italic",margin:"10px 0 0",lineHeight:1.5}}>{m.recipe.attribution}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* PREP TAB */}
            {section==="prep" && (
              <div>
                <div style={{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:"10px",padding:"10px 14px",marginBottom:"14px"}}>
                  <p style={{fontSize:"12px",fontWeight:700,color:"#92400e",margin:0}}>📦 Complete all steps on Monday in this order</p>
                  <p style={{fontSize:"11px",color:"#78350f",margin:"3px 0 0"}}>Steps are sequenced so earlier steps feed into later ones. Label every bag with the day and meal.</p>
                </div>
                {week.prepChecklist.map((item,i)=>(
                  <div key={i} style={{display:"flex",gap:"10px",marginBottom:"10px",alignItems:"flex-start",background:"#f8fafc",borderRadius:"10px",padding:"10px 12px",border:"1px solid #e2e8f0"}}>
                    <span style={{background:"#166534",color:"white",borderRadius:"50%",width:"22px",height:"22px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,flexShrink:0}}>{item.step}</span>
                    <div>
                      <p style={{fontSize:"12px",fontWeight:700,color:"#1e293b",margin:"0 0 2px"}}>{item.title}</p>
                      <p style={{fontSize:"11px",color:"#6b7280",margin:0,lineHeight:1.6}}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SUNDAY BABY PREP TAB */}
            {section==="babyprep" && (
              <div>
                <div style={{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:"10px",padding:"10px 14px",marginBottom:"16px"}}>
                  <p style={{fontSize:"12px",fontWeight:700,color:"#92400e",margin:"0 0 3px"}}>🥣 Sunday Baby Food Prep — {week.title}</p>
                  <p style={{fontSize:"11px",color:"#78350f",margin:0,lineHeight:1.5}}>Batch-cook on Sunday so baby portions are ready to pull from the fridge all week. Everything here reheat-and-serve on the night.</p>
                </div>

                {/* Per-meal baby batches */}
                {week.meals.map((m,i)=>{
                  const babySteps = m.recipe.steps.filter(s=>s.startsWith("BABY"));
                  return (
                    <div key={i} style={{marginBottom:"14px",background:"#f8fafc",borderRadius:"12px",padding:"12px 14px",border:"1px solid #e2e8f0"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"6px",marginBottom:"8px"}}>
                        <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                          <span style={{fontSize:"11px",fontWeight:700,color:"#166534",background:"#dcfce7",borderRadius:"6px",padding:"2px 8px"}}>{m.day}</span>
                          <span style={{fontSize:"12px",fontWeight:700,color:"#1e293b"}}>{m.meal}</span>
                        </div>
                        {GROUND_MEAT_MEALS.has(m.meal) && (
                          <span style={{background:"#fff7ed",color:"#9a3412",border:"1px solid #fed7aa",borderRadius:"6px",padding:"2px 8px",fontSize:"10px",fontWeight:700}}>🥩 {GROUND_MEAT_TEMP}</span>
                        )}
                      </div>

                      {/* Baby ingredients pulled from recipe */}
                      <div style={{marginBottom:"8px"}}>
                        <p style={{fontSize:"10px",fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:"0.05em",margin:"0 0 5px"}}>Baby batch ingredients</p>
                        <p style={{fontSize:"11px",color:"#6b7280",margin:0,lineHeight:1.5,fontStyle:"italic"}}>Pull from the full-recipe quantities — no separate shopping needed. Baby's portion bakes alongside the adult tray.</p>
                      </div>

                      {/* Baby-specific steps */}
                      {babySteps.length > 0 && (
                        <div>
                          <p style={{fontSize:"10px",fontWeight:700,color:"#475569",textTransform:"uppercase",letterSpacing:"0.05em",margin:"0 0 5px"}}>Baby prep steps</p>
                          {babySteps.map((step,j)=>(
                            <div key={j} style={{display:"flex",gap:"8px",alignItems:"flex-start",background:"#fef9c3",borderRadius:"8px",padding:"8px 10px",marginBottom:"5px",border:"1px solid #fde68a"}}>
                              <span style={{fontSize:"14px",flexShrink:0}}>👶</span>
                              <span style={{fontSize:"11px",color:"#78350f",lineHeight:1.6}}>{step.replace(/^BABY:\s*/,"")}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Texture cues for this meal */}
                      {week.textures.filter(t=>t.toLowerCase().includes(m.day.toLowerCase()) || m.recipe.ingredients.some(ing=>t.toLowerCase().split(":")[0].includes(ing.toLowerCase().split(" ")[0]))).slice(0,2).map((t,j)=>(
                        <div key={j} style={{display:"flex",gap:"6px",alignItems:"flex-start",marginTop:"6px",padding:"6px 8px",background:"#f0fdf4",borderRadius:"7px",border:"1px solid #bbf7d0"}}>
                          <span style={{fontSize:"12px",flexShrink:0}}>✋</span>
                          <span style={{fontSize:"10px",color:"#166534",lineHeight:1.5}}>{t}</span>
                        </div>
                      ))}

                      {/* Storage note */}
                      <div style={{display:"flex",gap:"6px",alignItems:"center",marginTop:"8px",padding:"5px 8px",background:"#f0f9ff",borderRadius:"7px",border:"1px solid #bae6fd"}}>
                        <span style={{fontSize:"12px"}}>❄️</span>
                        <span style={{fontSize:"10px",color:"#0369a1",fontWeight:600}}>Store in a labelled airtight container. Fridge up to 48 hrs or freeze. Reheat thoroughly — no pink in meat.</span>
                      </div>
                    </div>
                  );
                })}

                {/* Texture safety reminder */}
                <div style={{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"10px",padding:"10px 14px",marginTop:"4px"}}>
                  <p style={{fontSize:"11px",fontWeight:700,color:"#991b1b",margin:"0 0 3px"}}>👶 Safety reminders — every single meal</p>
                  <p style={{fontSize:"11px",color:"#7f1d1d",margin:0,lineHeight:1.6}}>Always supervise · Never leave baby alone while eating · Feel fish for pin bones every time · Squash round foods flat · No salt added to baby portions · Reheat to steaming and let cool before serving</p>
                </div>
              </div>
            )}

            {/* TEXTURES TAB */}
            {section==="textures" && (
              <div>
                <div style={{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:"10px",padding:"10px 12px",marginBottom:"12px"}}>
                  <p style={{fontSize:"12px",fontWeight:700,color:"#92400e",margin:0}}>👶 Always supervise mealtimes · Never leave baby alone while eating</p>
                </div>
                {week.textures.map((item,i)=>(
                  <div key={i} style={{display:"flex",gap:"8px",marginBottom:"10px",alignItems:"flex-start",padding:"8px 0",borderBottom:"1px solid #f1f5f9"}}>
                    <span style={{flexShrink:0,fontSize:"14px"}}>👶</span>
                    <span style={{fontSize:"12px",color:"#374151",lineHeight:1.6}}>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* ALLERGENS TAB */}
            {section==="allergens" && (
              <div>
                <p style={{fontSize:"12px",color:"#6b7280",margin:"0 0 12px"}}>Target: cover at least 6 of 10 allergen groups every week. Shellfish &amp; molluscs appear every other week (Weeks 2, 4 &amp; 6) by design, each introduced on its own first.</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"14px"}}>
                  {ALLERGENS.map(a=>{
                    const hit=week.allergenCoverage.hit.includes(a);
                    const c=COLORS[a];
                    return (
                      <div key={a} style={{display:"flex",alignItems:"center",gap:"8px",background:hit?c+"11":"#f8fafc",border:`1px solid ${hit?c+"44":"#e2e8f0"}`,borderRadius:"10px",padding:"8px 12px",minWidth:"120px"}}>
                        <span style={{fontSize:"14px"}}>{hit?"✅":"⬜"}</span>
                        <div>
                          <div style={{fontSize:"11px",fontWeight:700,color:hit?c:"#9ca3af"}}>{a}</div>
                          <div style={{fontSize:"10px",color:hit?"#166534":"#9ca3af"}}>{hit?"Covered":"Skipped"}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {week.allergenCoverage.hit.map(a=>{
                  const meals=week.meals.filter(m=>m.allergens.includes(a));
                  return (
                    <div key={a} style={{marginBottom:"10px"}}>
                      <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"5px"}}>
                        <AllergenBadge label={a}/>
                        <span style={{fontSize:"11px",color:"#6b7280"}}>in {meals.map(m=>m.day).join(", ")} meal{meals.length>1?"s":""}</span>
                      </div>
                    </div>
                  );
                })}
                <div style={{background:"#f0fdf4",borderRadius:"10px",padding:"10px 14px",border:"1px solid #bbf7d0"}}>
                  <span style={{fontSize:"12px",fontWeight:700,color:"#166534"}}>{week.allergenCoverage.hit.length}/10 allergen groups covered this week ✅</span>
                </div>
              </div>
            )}

            {/* SNACKS TAB */}
            {section==="snacks" && (
              <div>
                <div style={{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:"10px",padding:"10px 14px",marginBottom:"16px"}}>
                  <p style={{fontSize:"12px",fontWeight:700,color:"#92400e",margin:0}}>🍌 Baby Snack Bank — 9 months+</p>
                  <p style={{fontSize:"11px",color:"#78350f",margin:"3px 0 0"}}>Core snacks are available every week. Weekly extras rotate to keep allergen exposure varied and textures progressing.</p>
                </div>

                <p style={{fontSize:"12px",fontWeight:700,color:"#14532d",margin:"0 0 10px",textTransform:"uppercase",letterSpacing:"0.05em"}}>Core Snacks — Every Week</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr",gap:"8px",marginBottom:"20px"}}>
                  {CORE_SNACKS.map((s,i)=>(
                    <div key={i} style={{background:"#f8fafc",borderRadius:"10px",padding:"10px 14px",border:"1px solid #e2e8f0"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"8px",flexWrap:"wrap",marginBottom:"4px"}}>
                        <p style={{fontSize:"13px",fontWeight:700,color:"#1e293b",margin:0}}>{s.name}</p>
                        <div>{s.nutrition.map(n=><NutrBadge key={n} label={n}/>)}</div>
                      </div>
                      <p style={{fontSize:"11px",color:"#6b7280",margin:0,lineHeight:1.5}}>{s.notes}</p>
                    </div>
                  ))}
                </div>

                <p style={{fontSize:"12px",fontWeight:700,color:"#14532d",margin:"0 0 10px",textTransform:"uppercase",letterSpacing:"0.05em"}}>This Week's Extras — {week.title}</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr",gap:"8px"}}>
                  {WEEKLY_SNACKS.find(w=>w.week===tab+1)?.extras.map((s,i)=>(
                    <div key={i} style={{background:"#f0fdf4",borderRadius:"10px",padding:"10px 14px",border:"1px solid #bbf7d0"}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"8px",flexWrap:"wrap",marginBottom:"4px"}}>
                        <p style={{fontSize:"13px",fontWeight:700,color:"#14532d",margin:0}}>{s.name}</p>
                        <div>{s.nutrition.map(n=><NutrBadge key={n} label={n}/>)}</div>
                      </div>
                      <p style={{fontSize:"11px",color:"#374151",margin:0,lineHeight:1.5}}>{s.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GROCERY TAB */}
            {section==="grocery" && (
              <div>
                <div style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:"10px",padding:"10px 14px",marginBottom:"16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <p style={{fontSize:"12px",fontWeight:700,color:"#0369a1",margin:0}}>🛒 {week.title} Grocery List</p>
                    <p style={{fontSize:"11px",color:"#0c4a6e",margin:"3px 0 0"}}>Tap items to check off as you shop.</p>
                  </div>
                  <button onClick={()=>clearChecked(tab+1)} style={{background:"none",border:"1px solid #bae6fd",borderRadius:"6px",padding:"4px 10px",fontSize:"11px",color:"#0369a1",cursor:"pointer"}}>Clear</button>
                </div>
                {GROCERY_LISTS.find(g=>g.week===tab+1)?.categories.map((cat,i)=>(
                  <div key={i} style={{marginBottom:"14px"}}>
                    <p style={{fontSize:"12px",fontWeight:700,color:"#1e293b",margin:"0 0 6px"}}>{cat.name}</p>
                    <div style={{background:"#f8fafc",borderRadius:"10px",padding:"10px 14px",border:"1px solid #e2e8f0"}}>
                      {cat.items.map((item,j)=>{
                        const key = `w${tab+1}-${i}-${j}`;
                        const isChecked = !!checked[key];
                        return (
                          <div key={j} onClick={()=>toggleItem(key)} style={{display:"flex",alignItems:"center",gap:"10px",padding:"6px 0",borderBottom:j<cat.items.length-1?"1px solid #f1f5f9":"none",cursor:"pointer",userSelect:"none"}}>
                            <span style={{width:"18px",height:"18px",border:`1.5px solid ${isChecked?"#166534":"#d1d5db"}`,borderRadius:"4px",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:isChecked?"#166534":"white",transition:"all 0.15s"}}>
                              {isChecked && <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </span>
                            <span style={{fontSize:"12px",color:isChecked?"#9ca3af":"#374151",textDecoration:isChecked?"line-through":"none",transition:"all 0.15s"}}>{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div style={{background:"#fef9c3",border:"1px solid #fde68a",borderRadius:"10px",padding:"10px 14px",marginTop:"6px"}}>
                  <p style={{fontSize:"11px",color:"#78350f",margin:0}}>💡 <strong>Pantry staples to always keep stocked:</strong> olive oil, low-sodium soy sauce, sesame oil, mirin, garlic powder, ground sesame seeds, full-fat plain yoghurt, eggs, butter.</p>
                </div>
              </div>
            )}

            {/* GLOSSARY TAB */}
            {section==="glossary" && (
              <div>
                <p style={{fontSize:"12px",color:"#6b7280",margin:"0 0 14px"}}>All 18 meals across 6 weeks. Tap any meal to jump to its full recipe.</p>
                {WEEKS.map((w,wi)=>(
                  <div key={wi} style={{marginBottom:"18px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"}}>
                      <span style={{background:"#166534",color:"white",borderRadius:"6px",padding:"3px 10px",fontSize:"11px",fontWeight:700}}>{w.title}</span>
                      <span style={{fontSize:"11px",color:"#6b7280",fontStyle:"italic"}}>{w.nutritionFocus}</span>
                    </div>
                    {w.meals.map((m,mi)=>(
                      <button key={mi} onClick={()=>goToRecipe(wi,mi)} style={{display:"flex",alignItems:"flex-start",gap:"10px",width:"100%",marginBottom:"6px",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"10px",padding:"10px 12px",cursor:"pointer",textAlign:"left",transition:"all 0.15s"}}
                        onMouseEnter={e=>{e.currentTarget.style.background="#f0fdf4";e.currentTarget.style.borderColor="#166534";}}
                        onMouseLeave={e=>{e.currentTarget.style.background="#f8fafc";e.currentTarget.style.borderColor="#e2e8f0";}}>
                        <div style={{flexShrink:0,marginTop:"2px"}}>
                          <span style={{fontSize:"10px",fontWeight:700,color:"#166534",background:"#dcfce7",borderRadius:"4px",padding:"1px 6px"}}>{m.day}</span>
                        </div>
                        <div style={{flex:1}}>
                          <p style={{fontSize:"12px",fontWeight:700,color:"#1e293b",margin:"0 0 4px"}}>{m.meal}</p>
                          <div style={{display:"flex",flexWrap:"wrap",gap:"4px"}}>
                            {m.nutrition.map(n=><NutrBadge key={n} label={n}/>)}
                            {GROUND_MEAT_MEALS.has(m.meal) && <span style={{background:"#fff7ed",color:"#9a3412",border:"1px solid #fed7aa",borderRadius:"6px",padding:"1px 7px",fontSize:"10px",fontWeight:700,display:"inline-block",margin:"2px"}}>🥩 {GROUND_MEAT_TEMP}</span>}
                          </div>
                        </div>
                        <span style={{color:"#16a34a",fontSize:"16px",flexShrink:0,marginTop:"2px"}}>→</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
