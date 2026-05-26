// ==========================================
// StudyBuddy AI Dashboard Logic
// Interactive Simulator & Revenue Calculator
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  
  // ----------------------------------------
  // 1. DATA DICTIONARIES (Textbooks, Summaries & Quizzes)
  // ----------------------------------------
  
  const chapterData = {
    "science-10": {
      subject: "SCIENCE (CLASS 10)",
      title: "Chemical Reactions & Equations",
      pageText: "Chemical reactions are processes in which new substances with new properties are formed. During a chemical reaction, rearrangement of atoms takes place between the reacting substances to form new products. For example: 2H2 + O2 -> 2H2O (Combustion of Hydrogen). A chemical equation is the symbolic representation of a chemical reaction using symbols and chemical formulae. Balancing a chemical equation is necessary to satisfy the Law of Conservation of Mass, which states that mass can neither be created nor destroyed in a chemical reaction. Types of reactions include: Combination, Decomposition, Displacement, Double Displacement, Oxidation, and Reduction (Redox).",
      summary: [
        "<strong>Chemical Reaction:</strong> A process where reactants undergo structural rearrangement of atoms to yield new products with entirely unique properties.",
        "<strong>Shorthand Representation:</strong> Chemical equations employ symbols and formulae (reactants on LHS, products on RHS) to simplify reaction recording.",
        "<strong>Law of Conservation of Mass:</strong> Governs equation balancing; total atomic mass of reactants must strictly equal total atomic mass of products.",
        "<strong>Key Reaction Types:</strong> Includes Combination (A+B→AB), Decomposition (AB→A+B), Displacement (A+BC→AC+B), and Double Displacement (AB+CD→AD+CB).",
        "<strong>Redox Mechanisms:</strong> Concurrent processes of Oxidation (gain of oxygen/loss of electrons) and Reduction (loss of oxygen/gain of electrons)."
      ],
      quiz: [
        {
          q: "Why is it mandatory to balance a chemical equation?",
          options: [
            "To prove Dalton's Atomic Theory",
            "To satisfy the Law of Conservation of Mass",
            "To speed up the chemical reaction rate",
            "To ensure the products are always gaseous"
          ],
          correct: 1
        },
        {
          q: "What type of chemical reaction is: CaCO3 (s) + Heat -> CaO (s) + CO2 (g)?",
          options: [
            "Combination Reaction",
            "Thermal Decomposition Reaction",
            "Displacement Reaction",
            "Double Displacement Reaction"
          ],
          correct: 1
        },
        {
          q: "Which substance undergoes reduction in the reaction: CuO + H2 -> Cu + H2O?",
          options: [
            "Copper Oxide (CuO)",
            "Hydrogen (H2)",
            "Copper (Cu)",
            "Water (H2O)"
          ],
          correct: 0
        },
        {
          q: "A magnesium ribbon burns with a dazzling white flame to form a white powder. What is this powder?",
          options: [
            "Magnesium Carbonate",
            "Magnesium Nitrate",
            "Magnesium Oxide",
            "Magnesium Hydroxide"
          ],
          correct: 2
        },
        {
          q: "What is observed when lead nitrate powder is heated in a dry test tube?",
          options: [
            "Evolution of white dense fumes",
            "Brown fumes of Nitrogen Dioxide are evolved",
            "The crystals turn bright green",
            "A popping sound of Hydrogen gas"
          ],
          correct: 1
        }
      ]
    },
    "history-10": {
      subject: "SOCIAL SCIENCE (CLASS 10)",
      title: "Rise of Nationalism in Europe",
      pageText: "During the nineteenth century, nationalism emerged as a force which brought about sweeping changes in the political and mental world of Europe. The end result of these changes was the emergence of the nation-state in place of the multi-national dynastic empires of Europe. French artist Frédéric Sorrieu prepared a series of four prints in 1848 visualizing his dream of a world made up of 'democratic and social republics'. The French Revolution of 1789 was the first clear expression of nationalism. It introduced measures like the idea of la patrie (the fatherland) and le citoyen (the citizen), a new French flag, and a centralized administrative system. Napoleon's Civil Code of 1804 (Napoleonic Code) abolished all privileges based on birth, established equality before the law, and secured the right to property.",
      summary: [
        "<strong>Frédéric Sorrieu's Vision:</strong> The 1848 prints conceptualized a utopian world of democratic republics, showcasing the collective movement of sovereign nation-states.",
        "<strong>French Revolution (1789):</strong> Served as the historic birth of modern nationalism, introducing community-focused ideas like 'la patrie' and 'le citoyen'.",
        "<strong>Napoleonic Code (1804):</strong> Revolutionized administrative structures by eliminating feudal birth privileges, standardizing laws, and securing property rights.",
        "<strong>Rise of Liberalism:</strong> Advocated for representative governments, individual freedom, and the absolute elimination of aristocratic class privileges.",
        "<strong>Nation-State Concept:</strong> Transitioned Europe away from vast, autocratic dynastic empires to unified territories bound by shared history and culture."
      ],
      quiz: [
        {
          q: "In which year did the French artist Frédéric Sorrieu paint his famous prints visualizing democratic republics?",
          options: [
            "1789",
            "1804",
            "1848",
            "1871"
          ],
          correct: 2
        },
        {
          q: "What was the significance of the ideas 'la patrie' and 'le citoyen' in the French Revolution?",
          options: [
            "They introduced new royal taxation methods",
            "They emphasized the notion of a united community with equal rights under a constitution",
            "They declared Napoleon Bonaparte as absolute Emperor",
            "They supported the power of the Catholic Church clergy"
          ],
          correct: 1
        },
        {
          q: "The Civil Code of 1804 is commonly known as the:",
          options: [
            "Treaty of Vienna",
            "Code of Liberty",
            "Napoleonic Code",
            "Declaration of Citizen Rights"
          ],
          correct: 2
        },
        {
          q: "What was the main purpose of the Zollverein custom union formed in Germany in 1834?",
          options: [
            "To promote military alliances across Prussia",
            "To abolish tariff barriers and unify economic markets",
            "To elect a democratic parliament in Frankfurt",
            "To suppress the peasant revolts"
          ],
          correct: 1
        },
        {
          q: "Which treaty recognized Greece as an independent nation in 1832?",
          options: [
            "Treaty of Versailles",
            "Treaty of Constantinople",
            "Treaty of Vienna",
            "Treaty of London"
          ],
          correct: 1
        }
      ]
    },
    "english-10": {
      subject: "ENGLISH LITERATURE (CLASS 10)",
      title: "A Letter to God",
      pageText: "Lencho was a dedicated farmer who lived on the crest of a low hill. His house was the only one in the entire valley. He anticipated a good harvest, needing only a downpour or at least a shower. However, a sudden strong wind began to blow and huge hailstones began to fall along with the rain. The hail rained for an hour, completely destroying his corn field. Heartbroken but filled with immense faith in God, Lencho wrote a letter to God requesting a hundred pesos to sow his field again and support his family until the next harvest. He posted the letter. The postmaster read it, and touched by Lencho's singular faith, decided to collect money from his employees and friends to send to Lencho, managed to gather seventy pesos, and signed the letter simply as 'God'.",
      summary: [
        "<strong>Lencho's Homestead:</strong> Lencho, a dedicated farmer, resided with his family in a solitary house situated on the crest of a low hill in a valley.",
        "<strong>The Hailstorm Catastrophe:</strong> A much-needed rainstorm suddenly turned into a devastating hailstorm, completely wiping out Lencho's entire corn crop.",
        "<strong>Unwavering Faith:</strong> Driven by immense, singular faith in divine help, Lencho decided to write a direct letter to God requesting 100 pesos to replant his fields.",
        "<strong>The Postmaster's Gesture:</strong> Touched by Lencho's deep faith, the kind postmaster collected donations from his staff, pooling together 70 pesos.",
        "<strong>God's Signature:</strong> To prevent Lencho's faith from breaking, the postmaster signed the envelope simply as 'God' before sending the 70 pesos."
      ],
      quiz: [
        {
          q: "Where was Lencho's house located?",
          options: [
            "In a crowded city market",
            "On the crest of a low hill in a valley",
            "Near a flowing river in a forest",
            "At the peak of a high mountain range"
          ],
          correct: 1
        },
        {
          q: "What unexpected disaster destroyed Lencho's ripe corn fields?",
          options: [
            "A sudden wildfire",
            "An intense insect plague",
            "A severe hailstorm lasting an hour",
            "A severe drought"
          ],
          correct: 2
        },
        {
          q: "How much financial support did Lencho write to request from God?",
          options: [
            "Fifty Pesos",
            "Seventy Pesos",
            "One Hundred Pesos",
            "One Thousand Pesos"
          ],
          correct: 2
        },
        {
          q: "Why did the postmaster decide to answer Lencho's letter and collect money?",
          options: [
            "To play a funny prank on Lencho",
            "To keep Lencho's singular faith in God alive",
            "Because he owed Lencho a debt",
            "To steal the letter's stamp"
          ],
          correct: 1
        },
        {
          q: "How much money was the postmaster able to collect and send to Lencho?",
          options: [
            "50 Pesos",
            "70 Pesos",
            "100 Pesos",
            "120 Pesos"
          ],
          correct: 1
        }
      ]
    }
  };

  // ----------------------------------------
  // 2. DOM ELEMENT SELECTORS
  // ----------------------------------------
  
  // Simulator Controls
  const boardSelect = document.getElementById("board-select");
  const chapterSelect = document.getElementById("chapter-select");
  const textbookPageContent = document.getElementById("textbook-page-content");
  const scanBtn = document.getElementById("scan-btn");
  
  // Dynamic Real-Time Nodes
  const geminiKeyInput = document.getElementById("gemini-key");
  const customTextGroup = document.getElementById("custom-text-group");
  const customTextInput = document.getElementById("custom-text-input");
  const previewContainer = document.getElementById("preview-container");

  // Phone Mockup Screens
  const screenCamera = document.getElementById("screen-camera");
  const screenProcessing = document.getElementById("screen-processing");
  const screenResults = document.getElementById("screen-results");
  const processingStep = document.getElementById("processing-step");
  const appCurrentBoard = document.getElementById("app-current-board");

  // Result Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  // Summary Tab Details
  const sumSubject = document.getElementById("sum-subject");
  const sumTitle = document.getElementById("sum-title");
  const sumPointsList = document.getElementById("sum-points-list");

  // Quiz Tab Details
  const quizProgressFill = document.getElementById("quiz-progress-fill");
  const qCounter = document.getElementById("q-counter");
  const qCurrentScore = document.getElementById("q-current-score");
  const quizQuestionText = document.getElementById("quiz-question-text");
  const quizOptionsContainer = document.getElementById("quiz-options-container");
  const quizNextBtn = document.getElementById("quiz-next-btn");
  const quizResultSlide = document.getElementById("quiz-result-slide");
  const earnedXp = document.getElementById("earned-xp");
  const quizRatingMsg = document.getElementById("quiz-rating-msg");
  const quizRestartBtn = document.getElementById("quiz-restart-btn");

  // Calculator Sliders & Output Displays
  const inputMau = document.getElementById("input-mau");
  const inputConversion = document.getElementById("input-conversion");
  const inputPrice = document.getElementById("input-price");
  
  const valMau = document.getElementById("val-mau");
  const valConversion = document.getElementById("val-conversion");
  const valPrice = document.getElementById("val-price");

  const snipPremiumUsers = document.getElementById("snip-premium-users");
  const snipBreakeven = document.getElementById("snip-breakeven");

  const dispRevenue = document.getElementById("disp-revenue");
  const dispCost = document.getElementById("disp-cost");
  const dispProfit = document.getElementById("disp-profit");

  // Operating Costs Breakdown Nodes
  const costApi = document.getElementById("cost-api");
  const costHosting = document.getElementById("cost-hosting");
  const costMarketing = document.getElementById("cost-marketing");
  const costSupport = document.getElementById("cost-support");
  const costMisc = document.getElementById("cost-misc");

  const barApi = document.getElementById("bar-api");
  const barHosting = document.getElementById("bar-hosting");
  const barMarketing = document.getElementById("bar-marketing");
  const barSupport = document.getElementById("bar-support");
  const barMisc = document.getElementById("bar-misc");

  // Phone Mockup Navigation
  const appNavHome = document.getElementById("app-nav-home");
  const appNavScan = document.getElementById("app-nav-scan");
  const appNavProfile = document.getElementById("app-nav-profile");

  // ----------------------------------------
  // 3. INITIALIZER & STATE
  // ----------------------------------------
  
  let activeChapterKey = "science-10";
  let activeBoard = "CBSE";
  
  let quizState = {
    currentQuestionIndex: 0,
    score: 0,
    answersSelected: [],
    completed: false
  };

  // Load saved Gemini Key if exists
  if (localStorage.getItem("gemini_api_key")) {
    geminiKeyInput.value = localStorage.getItem("gemini_api_key");
  }

  // Save Gemini Key when typing
  geminiKeyInput.addEventListener("input", (e) => {
    localStorage.setItem("gemini_api_key", e.target.value.trim());
  });

  // Set initial textbook text
  updateTextbookPreview();
  // Set initial financials
  calculateFinancials();

  // ----------------------------------------
  // 4. SIMULATOR LOGIC
  // ----------------------------------------

  // Update textbook snapshot when select inputs change
  // Board standard is locked to CBSE internally

  chapterSelect.addEventListener("change", (e) => {
    activeChapterKey = e.target.value;
    if (activeChapterKey === "custom") {
      previewContainer.classList.add("hidden");
      customTextGroup.classList.remove("hidden");
    } else {
      previewContainer.classList.remove("hidden");
      customTextGroup.classList.add("hidden");
      updateTextbookPreview();
    }
  });

  function updateTextbookPreview() {
    const data = chapterData[activeChapterKey];
    textbookPageContent.innerHTML = `<em>"${data.pageText}"</em>`;
    
    // Reset simulated mobile screen to camera tab if active results
    resetAppScreen();
  }

  function resetAppScreen() {
    screenCamera.classList.add("active");
    screenProcessing.classList.remove("active");
    screenResults.classList.remove("active");
    
    // Reset tabs
    switchTab("tab-summary");
    
    // Reset quiz
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.answersSelected = [];
    quizState.completed = false;
  }

  // Scan & Summarize Simulation Trigger
  scanBtn.addEventListener("click", async () => {
    // Determine active text input
    let textToAnalyze = "";
    if (activeChapterKey === "custom") {
      textToAnalyze = customTextInput.value.trim();
      if (!textToAnalyze) {
        alert("Please paste some textbook paragraphs into the custom text box before scanning!");
        return;
      }
    } else {
      textToAnalyze = chapterData[activeChapterKey].pageText;
    }

    const apiKey = geminiKeyInput.value.trim();
    const useLiveAI = apiKey.length > 0;

    // 1. Move to Processing Screen
    screenCamera.classList.remove("active");
    screenResults.classList.remove("active");
    screenProcessing.classList.add("active");
    
    appCurrentBoard.innerText = `CBSE Student Portal`;

    // 2. Perform step-by-step loading effects
    const steps = [
      { text: "Capturing page with High-Res OCR...", time: 0 },
      { text: "Extracting textbook paragraphs...", time: 400 },
      { text: useLiveAI ? "Establishing secure Google Cloud connection..." : "Structuring prompts for CBSE Syllabus...", time: 800 },
      { text: useLiveAI ? "Generating Dynamic CBSE Summary via Gemini..." : "Engaging Gemini AI Large Language Model...", time: 1200 },
      { text: useLiveAI ? "Constructing Live Board-Aligned MCQ Quiz..." : "Formatting revision guides & quizzes...", time: 1600 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        processingStep.innerText = step.text;
      }, step.time);
    });

    if (useLiveAI) {
      try {
        // Call actual live Gemini API
        const generatedData = await callGeminiAPI(apiKey, textToAnalyze);
        
        // Populate dynamically
        setTimeout(() => {
          populateResults(generatedData);
          screenProcessing.classList.remove("active");
          screenResults.classList.add("active");
          
          appNavHome.classList.remove("active");
          appNavScan.classList.add("active");

          if (window.innerWidth <= 968) {
            document.querySelector(".smartphone-mockup").scrollIntoView({ 
              behavior: "smooth", 
              block: "start" 
            });
          }
        }, 2000);
      } catch (error) {
        console.error("Live AI Generation failed:", error);
        alert("Live AI Generation failed! (Please check your Gemini API key or internet connection). Falling back to preloaded offline database.");
        
        // Graceful Fallback
        setTimeout(() => {
          if (activeChapterKey === "custom") {
            activeChapterKey = "science-10"; // Fallback to science demo if they were custom
            chapterSelect.value = "science-10";
            previewContainer.classList.remove("hidden");
            customTextGroup.classList.add("hidden");
            updateTextbookPreview();
          }
          populateResults();
          screenProcessing.classList.remove("active");
          screenResults.classList.add("active");
          
          appNavHome.classList.remove("active");
          appNavScan.classList.add("active");

          if (window.innerWidth <= 968) {
            document.querySelector(".smartphone-mockup").scrollIntoView({ 
              behavior: "smooth", 
              block: "start" 
            });
          }
        }, 2000);
      }
    } else {
      // Use pre-loaded static simulation datasets
      if (activeChapterKey === "custom") {
        alert("Custom mode requires a Gemini API Key to function. Please enter a key in the settings panel above, or use preloaded chapters! Falling back to CBSE Science demo...");
        activeChapterKey = "science-10";
        chapterSelect.value = "science-10";
        previewContainer.classList.remove("hidden");
        customTextGroup.classList.add("hidden");
        updateTextbookPreview();
      }

      setTimeout(() => {
        populateResults();
        screenProcessing.classList.remove("active");
        screenResults.classList.add("active");
        
        appNavHome.classList.remove("active");
        appNavScan.classList.add("active");

        if (window.innerWidth <= 968) {
          document.querySelector(".smartphone-mockup").scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
        }
      }, 2000);
    }
  });

  // ----------------------------------------
  // LIVE GEMINI API CLIENT INTEGRATION
  // ----------------------------------------
  let activeDataObj = null;

  async function callGeminiAPI(key, text) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    const prompt = `You are a professional CBSE Board Exam Tutor. Analyze the following textbook text and generate a structured JSON object containing a cheat-sheet summary and a school board exam quiz.
    Your response must be STRICTLY raw JSON. Do NOT wrap it in \`\`\`json markdown blocks, do not prefix with anything, just output raw JSON text.
    Format must be exactly this JSON schema:
    {
      "summary": [
        "<strong>Key Highlight:</strong> Rich bullet point explaining a core term or concept from the text...",
        "<strong>Key Highlight:</strong> Another bullet point...",
        "<strong>Key Highlight:</strong> Another bullet point...",
        "<strong>Key Highlight:</strong> Another bullet point...",
        "<strong>Key Highlight:</strong> Another bullet point..."
      ],
      "quiz": [
        {
          "q": "CBSE Class 10 style multiple choice question matching this text?",
          "options": ["Choice A", "Choice B", "Choice C", "Choice D"],
          "correct": 0
        },
        {
          "q": "Another CBSE Class 10 multiple choice question matching this text?",
          "options": ["Choice A", "Choice B", "Choice C", "Choice D"],
          "correct": 1
        },
        {
          "q": "Another CBSE Class 10 multiple choice question matching this text?",
          "options": ["Choice A", "Choice B", "Choice C", "Choice D"],
          "correct": 2
        },
        {
          "q": "Another CBSE Class 10 multiple choice question matching this text?",
          "options": ["Choice A", "Choice B", "Choice C", "Choice D"],
          "correct": 3
        },
        {
          "q": "Another CBSE Class 10 multiple choice question matching this text?",
          "options": ["Choice A", "Choice B", "Choice C", "Choice D"],
          "correct": 0
        }
      ]
    }
    Textbook Text to analyze:
    ${text}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error("Gemini API call failed");
    }

    const resData = await response.json();
    let reply = resData.candidates[0].content.parts[0].text.trim();
    
    // Clean up any markdown code block wrapping (e.g. ```json ... ```)
    if (reply.startsWith("```")) {
      reply = reply.replace(/^```(json)?/, "").replace(/```$/, "").trim();
    }

    return JSON.parse(reply);
  }

  // Populate dynamic summary & quiz data
  function populateResults(customData = null) {
    const data = customData ? customData : chapterData[activeChapterKey];
    activeDataObj = data;
    
    // 1. Summaries
    sumSubject.innerText = customData ? "DYN-AI REALTIME" : `${data.subject} - CBSE SPECIFIC`;
    sumTitle.innerText = customData ? "Real Live AI Analysis" : data.title;
    
    sumPointsList.innerHTML = "";
    data.summary.forEach(point => {
      const item = document.createElement("div");
      item.className = "summary-point-item";
      item.innerHTML = `<i class="fa-solid fa-circle-dot"></i><span>${point}</span>`;
      sumPointsList.appendChild(item);
    });

    // 2. Quiz Setup
    loadQuizQuestion();
  }

  // Quiz Mechanisms
  function loadQuizQuestion() {
    const data = activeDataObj ? activeDataObj : chapterData[activeChapterKey];
    const quiz = data.quiz;
    const idx = quizState.currentQuestionIndex;

    // Reset components
    quizNextBtn.classList.add("hidden");
    quizResultSlide.classList.add("hidden");
    
    // Display elements
    quizProgressFill.style.width = `${((idx) / quiz.length) * 100}%`;
    qCounter.innerText = `Question ${idx + 1} of ${quiz.length}`;
    qCurrentScore.innerText = `Score: ${quizState.score} XP`;

    const qNode = quiz[idx];
    quizQuestionText.innerText = qNode.q;
    quizQuestionText.style.display = "block";

    quizOptionsContainer.innerHTML = "";
    quizOptionsContainer.style.display = "flex";
    
    qNode.options.forEach((opt, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.innerHTML = `<span>${opt}</span><i class="fa-regular fa-circle"></i>`;
      
      btn.addEventListener("click", () => {
        selectQuizOption(btn, optIdx, qNode.correct);
      });

      quizOptionsContainer.appendChild(btn);
    });
  }

  function selectQuizOption(selectedBtn, selectedIdx, correctIdx) {
    const options = quizOptionsContainer.querySelectorAll(".quiz-option");
    
    // Disable all options once an answer is chosen
    options.forEach(opt => opt.disabled = true);
    
    if (selectedIdx === correctIdx) {
      selectedBtn.classList.add("correct");
      selectedBtn.querySelector("i").className = "fa-solid fa-circle-check";
      quizState.score += 10;
      qCurrentScore.innerText = `Score: ${quizState.score} XP`;
    } else {
      selectedBtn.classList.add("incorrect");
      selectedBtn.querySelector("i").className = "fa-solid fa-circle-xmark";
      
      // Highlight correct answer in green
      options[correctIdx].classList.add("correct");
      options[correctIdx].querySelector("i").className = "fa-solid fa-circle-check";
    }

    quizNextBtn.classList.remove("hidden");
  }

  // Next Question Button Callback
  quizNextBtn.addEventListener("click", () => {
    const data = activeDataObj ? activeDataObj : chapterData[activeChapterKey];
    quizState.currentQuestionIndex++;

    if (quizState.currentQuestionIndex < data.quiz.length) {
      loadQuizQuestion();
    } else {
      showQuizResults();
    }
  });

  function showQuizResults() {
    const data = activeDataObj ? activeDataObj : chapterData[activeChapterKey];
    
    quizProgressFill.style.width = "100%";
    quizQuestionText.style.display = "none";
    quizOptionsContainer.style.display = "none";
    quizNextBtn.classList.add("hidden");
    
    earnedXp.innerText = `${quizState.score}`;
    
    let rating = "";
    if (quizState.score === 50) {
      rating = "🏆 Phenomenal! You got a perfect board score! Keep it up.";
    } else if (quizState.score >= 30) {
      rating = "🌟 Great study performance! Review the cheat sheet to target missed items.";
    } else {
      rating = "📚 Good try! Let's read the summaries carefully and practice again.";
    }
    
    quizRatingMsg.innerText = rating;
    quizResultSlide.classList.remove("hidden");
  }

  quizRestartBtn.addEventListener("click", () => {
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    loadQuizQuestion();
  });

  // Tabs Switching logic inside Phone Output Screen
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  function switchTab(tabId) {
    tabBtns.forEach(btn => {
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    tabPanes.forEach(pane => {
      if (pane.id === tabId) {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    });
  }

  // App Footer buttons simulation resets
  appNavHome.addEventListener("click", resetAppScreen);
  appNavScan.addEventListener("click", () => {
    if (screenResults.classList.contains("active")) return;
    scanBtn.click();
  });
  appNavProfile.addEventListener("click", () => {
    alert("StudyBuddy Analytics Dashboard: Priya Sharma has scanned 42 textbook pages, averaging an 84% accuracy score on dynamic mock exams!");
  });


  // ----------------------------------------
  // 5. FINANCIAL CALCULATOR ALGEBRA
  // ----------------------------------------

  inputMau.addEventListener("input", (e) => {
    valMau.innerText = Number(e.target.value).toLocaleString('en-IN');
    calculateFinancials();
  });

  inputConversion.addEventListener("input", (e) => {
    valConversion.innerText = `${e.target.value}%`;
    calculateFinancials();
  });

  inputPrice.addEventListener("input", (e) => {
    valPrice.innerText = `₹${e.target.value}`;
    calculateFinancials();
  });

  function calculateFinancials() {
    const mau = parseInt(inputMau.value);
    const conversion = parseFloat(inputConversion.value) / 100;
    const price = parseInt(inputPrice.value);

    // Calculate premium volume
    const premiumUsers = Math.round(mau * conversion);
    const freeUsers = mau - premiumUsers;
    snipPremiumUsers.innerText = premiumUsers.toLocaleString('en-IN');

    // 1. Gross Revenue
    const grossRevenue = premiumUsers * price;
    dispRevenue.innerText = `₹${grossRevenue.toLocaleString('en-IN')}`;

    // 2. Realistic Dynamic Costs
    // API Cost: free user avg 6 scans/mo (₹0.10/scan), premium user 60 scans/mo (₹0.10/scan)
    const apiCost = Math.round((freeUsers * 6 * 0.10) + (premiumUsers * 60 * 0.10));
    
    // Hosting Cost: Base ₹6,000 + ₹0.40 per active user (for scaling databases)
    const hostingCost = Math.round(6000 + (mau * 0.40));
    
    // Marketing Cost: Fixed campaign acquisition budget (scales up slightly at higher targets)
    const marketingCost = Math.round(10000 + (mau * 0.20));
    
    // Support & Admin: Fixed dev salary portion + user tickets ratio
    const supportCost = Math.round(15000 + (premiumUsers * 2.0));
    
    // Miscellaneous: UPI Gateway Fees (2% of Revenue) + general buffers
    const gatewayFees = Math.round(grossRevenue * 0.02);
    const miscCost = Math.round(4000 + gatewayFees);

    const totalCost = apiCost + hostingCost + marketingCost + supportCost + miscCost;
    dispCost.innerText = `₹${totalCost.toLocaleString('en-IN')}`;

    // 3. Profit
    const netProfit = grossRevenue - totalCost;
    dispProfit.innerText = `₹${netProfit.toLocaleString('en-IN')}`;

    // Style Profit text dynamically (Red if loss, Green if profit)
    if (netProfit < 0) {
      dispProfit.className = "metric-value text-red";
    } else {
      dispProfit.className = "metric-value text-green";
    }

    // 4. Break-even Subscribers
    const breakEvenSubscribers = Math.ceil(totalCost / price);
    snipBreakeven.innerText = isFinite(breakEvenSubscribers) ? breakEvenSubscribers.toLocaleString('en-IN') : 0;

    // 5. Update Cost breakdown bars
    costApi.innerText = `₹${apiCost.toLocaleString('en-IN')}`;
    costHosting.innerText = `₹${hostingCost.toLocaleString('en-IN')}`;
    costMarketing.innerText = `₹${marketingCost.toLocaleString('en-IN')}`;
    costSupport.innerText = `₹${supportCost.toLocaleString('en-IN')}`;
    costMisc.innerText = `₹${miscCost.toLocaleString('en-IN')}`;

    // Scale widths based on maximum of costs
    const costsArray = [apiCost, hostingCost, marketingCost, supportCost, miscCost];
    const maxCost = Math.max(...costsArray);
    
    barApi.style.width = `${(apiCost / maxCost) * 100}%`;
    barHosting.style.width = `${(hostingCost / maxCost) * 100}%`;
    barMarketing.style.width = `${(marketingCost / maxCost) * 100}%`;
    barSupport.style.width = `${(supportCost / maxCost) * 100}%`;
    barMisc.style.width = `${(miscCost / maxCost) * 100}%`;
  }
  
});
