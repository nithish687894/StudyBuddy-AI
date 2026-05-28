// ==========================================
// StudyBuddy AI Application Engine
// Physical Mobile OCR Scan & Interactive Simulator
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
  
  // Desktop Sidebar controls
  const chapterSelect = document.getElementById("chapter-select");
  const textbookPageContent = document.getElementById("textbook-page-content");
  const scanBtn = document.getElementById("scan-btn");
  const geminiKeyInput = document.getElementById("gemini-key");
  const customTextGroup = document.getElementById("custom-text-group");
  const customTextInput = document.getElementById("custom-text-input");
  const previewContainer = document.getElementById("preview-container");
  const qrCodeImg = document.getElementById("qr-code-img");
  
  // Collapsible panel elements
  const financialsToggleBtn = document.getElementById("financials-toggle-btn");
  const financialsContentPanel = document.getElementById("financials-content-panel");
  const collapsibleCard = document.querySelector(".collapsible-card");

  // Phone Mockup Screens
  const screenCamera = document.getElementById("screen-camera");
  const screenProcessing = document.getElementById("screen-processing");
  const screenResults = document.getElementById("screen-results");
  const screenProgressProfile = document.getElementById("screen-progress-profile");
  const processingStep = document.getElementById("processing-step");
  const processingMainStatus = document.getElementById("processing-main-status");
  const appCurrentBoard = document.getElementById("app-current-board");

  // Camera Snapshot OCR Nodes
  const appCameraTrigger = document.getElementById("app-camera-trigger");
  const mobileCameraInput = document.getElementById("mobile-camera-input");
  const cameraPhotoPreview = document.getElementById("camera-photo-preview");
  const capturedImg = document.getElementById("captured-img");
  const confirmScanBtn = document.getElementById("confirm-scan-btn");
  const cancelScanBtn = document.getElementById("cancel-scan-btn");
  const scanningThumbnailContainer = document.getElementById("scanning-thumbnail-container");
  const scanningThumbnail = document.getElementById("scanning-thumbnail");

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

  // Sliders: Desktop Sidebar
  const inputMau = document.getElementById("input-mau");
  const inputConversion = document.getElementById("input-conversion");
  const inputPrice = document.getElementById("input-price");
  const valMau = document.getElementById("val-mau");
  const valConversion = document.getElementById("val-conversion");
  const valPrice = document.getElementById("val-price");
  const dispRevenue = document.getElementById("disp-revenue");
  const dispCost = document.getElementById("disp-cost");
  const dispProfit = document.getElementById("disp-profit");

  // Sliders: Mobile App (Internal Screen)
  const appInputMau = document.getElementById("app-input-mau");
  const appInputConversion = document.getElementById("app-input-conversion");
  const appInputPrice = document.getElementById("app-input-price");
  const appValMau = document.getElementById("app-val-mau");
  const appValConversion = document.getElementById("app-val-conversion");
  const appValPrice = document.getElementById("app-val-price");
  const appDispRevenue = document.getElementById("app-disp-revenue");
  const appDispCost = document.getElementById("app-disp-cost");
  const appDispProfit = document.getElementById("app-disp-profit");

  // Phone Mockup Navigation
  const appNavHome = document.getElementById("app-nav-home");
  const appNavScan = document.getElementById("app-nav-scan");
  const appNavProfile = document.getElementById("app-nav-profile");

  // ----------------------------------------
  // 3. INITIALIZER & STATE
  // ----------------------------------------
  
  let activeChapterKey = "science-10";
  let activeDataObj = null;
  let ocrImageFile = null;
  
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

  geminiKeyInput.addEventListener("input", (e) => {
    localStorage.setItem("gemini_api_key", e.target.value.trim());
  });

  // Set initial textbook text
  updateTextbookPreview();
  // Set initial financials
  calculateFinancials(true); // Sync from desktop values to mobile on load

  // Load dynamic QR Code based on local server network IP or current address!
  if (qrCodeImg) {
    fetch('/api/config')
      .then(res => res.json())
      .then(config => {
        const mobileURL = `http://${config.localIp}:${config.port}`;
        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(mobileURL)}`;
        const urlText = document.querySelector(".qr-url-text");
        if (urlText) {
          urlText.innerText = `Connect phone to Wi-Fi, scan QR!`;
        }
      })
      .catch(() => {
        // Fallback for file:// direct viewing
        const currentURL = window.location.href;
        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentURL)}`;
        const urlText = document.querySelector(".qr-url-text");
        if (urlText) {
          urlText.innerText = `Connect phone to Wi-Fi, scan QR!`;
        }
      });
  }

  // ----------------------------------------
  // 4. DESKTOP SIDEBAR COLLAPSE TOGGLE
  // ----------------------------------------
  if (financialsToggleBtn) {
    financialsToggleBtn.addEventListener("click", () => {
      const isOpen = collapsibleCard.classList.contains("open");
      if (isOpen) {
        collapsibleCard.classList.remove("open");
        financialsContentPanel.classList.add("hidden");
      } else {
        collapsibleCard.classList.add("open");
        financialsContentPanel.classList.remove("hidden");
      }
    });
  }

  // ----------------------------------------
  // 5. DOUBLE CALCULATOR SYNCHRONIZER
  // ----------------------------------------
  
  // Desktop sidebar event listeners
  inputMau.addEventListener("input", (e) => {
    valMau.innerText = Number(e.target.value).toLocaleString('en-IN');
    appInputMau.value = e.target.value;
    appValMau.innerText = Number(e.target.value).toLocaleString('en-IN');
    calculateFinancials();
  });

  inputConversion.addEventListener("input", (e) => {
    valConversion.innerText = `${e.target.value}%`;
    appInputConversion.value = e.target.value;
    appValConversion.innerText = `${e.target.value}%`;
    calculateFinancials();
  });

  inputPrice.addEventListener("input", (e) => {
    valPrice.innerText = `₹${e.target.value}`;
    appInputPrice.value = e.target.value;
    appValPrice.innerText = `₹${e.target.value}`;
    calculateFinancials();
  });

  // Mobile App Estimator event listeners
  appInputMau.addEventListener("input", (e) => {
    appValMau.innerText = Number(e.target.value).toLocaleString('en-IN');
    inputMau.value = e.target.value;
    valMau.innerText = Number(e.target.value).toLocaleString('en-IN');
    calculateFinancials();
  });

  appInputConversion.addEventListener("input", (e) => {
    appValConversion.innerText = `${e.target.value}%`;
    inputConversion.value = e.target.value;
    valConversion.innerText = `${e.target.value}%`;
    calculateFinancials();
  });

  appInputPrice.addEventListener("input", (e) => {
    appValPrice.innerText = `₹${e.target.value}`;
    inputPrice.value = e.target.value;
    valPrice.innerText = `₹${e.target.value}`;
    calculateFinancials();
  });

  function calculateFinancials() {
    const mau = parseInt(inputMau.value);
    const conversion = parseFloat(inputConversion.value) / 100;
    const price = parseInt(inputPrice.value);

    // Algebra Model Formula
    const premiumUsers = Math.round(mau * conversion);
    const freeUsers = mau - premiumUsers;
    
    // Gross revenue
    const grossRevenue = premiumUsers * price;
    
    // Server costs calculations
    const apiCost = Math.round((freeUsers * 6 * 0.10) + (premiumUsers * 60 * 0.10));
    const hostingCost = Math.round(6000 + (mau * 0.40));
    const marketingCost = Math.round(10000 + (mau * 0.20));
    const supportCost = Math.round(15000 + (premiumUsers * 2.0));
    const gatewayFees = Math.round(grossRevenue * 0.02);
    const miscCost = Math.round(4000 + gatewayFees);
    
    const totalCost = apiCost + hostingCost + marketingCost + supportCost + miscCost;
    const netProfit = grossRevenue - totalCost;

    // Formatting outputs in standard Indian Rupees (₹)
    const formattedRevenue = `₹${grossRevenue.toLocaleString('en-IN')}`;
    const formattedCost = `₹${totalCost.toLocaleString('en-IN')}`;
    const formattedProfit = `₹${netProfit.toLocaleString('en-IN')}`;

    // Update Desktop Labels
    dispRevenue.innerText = formattedRevenue;
    dispCost.innerText = formattedCost;
    dispProfit.innerText = formattedProfit;

    if (netProfit < 0) {
      dispProfit.className = "text-red font-bold";
    } else {
      dispProfit.className = "text-green font-bold";
    }

    // Update Mobile App Labels
    appDispRevenue.innerText = formattedRevenue;
    appDispCost.innerText = formattedCost;
    appDispProfit.innerText = formattedProfit;

    if (netProfit < 0) {
      appDispProfit.className = "text-red";
    } else {
      appDispProfit.className = "text-green";
    }
  }

  // ----------------------------------------
  // 6. SIMULATOR LOGIC
  // ----------------------------------------

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
    resetAppScreen();
  }

  function resetAppScreen() {
    screenCamera.classList.add("active");
    screenProcessing.classList.remove("active");
    screenResults.classList.remove("active");
    screenProgressProfile.classList.remove("active");

    appNavHome.classList.add("active");
    appNavProfile.classList.remove("active");

    // Close preview overlays if open
    cameraPhotoPreview.classList.add("hidden");
    capturedImg.src = "";
    ocrImageFile = null;
    
    // Reset tabs
    switchTab("tab-summary");
    
    // Reset quiz
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.answersSelected = [];
    quizState.completed = false;
  }

  // Scan Button Trigger (Desktop Controls)
  scanBtn.addEventListener("click", () => {
    // Determine active input mode
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

    triggerMockScanAnimation(textToAnalyze);
  });

  // Mock scan animation logic
  function triggerMockScanAnimation(text) {
    triggerCameraShutterFlash();

    // Reset views
    screenCamera.classList.remove("active");
    screenResults.classList.remove("active");
    screenProgressProfile.classList.remove("active");
    screenProcessing.classList.add("active");
    
    appNavHome.classList.remove("active");
    appNavProfile.classList.remove("active");
    
    appCurrentBoard.innerText = `CBSE Student Portal`;
    processingMainStatus.innerText = "Analyzing Textbook Page...";
    scanningThumbnailContainer.classList.add("hidden");

    const apiKey = geminiKeyInput.value.trim();
    const useLiveAI = apiKey.length > 0;

    const steps = [
      { text: "Reading textbook page with high-res scanner...", time: 0 },
      { text: "OCR extracting structural text...", time: 400 },
      { text: useLiveAI ? "Establishing connection to Google Gemini..." : "Matching extracted text to CBSE standards...", time: 800 },
      { text: useLiveAI ? "Generating board cheat sheet summaries..." : "Formatting dynamic MCQs & answers...", time: 1200 },
      { text: useLiveAI ? "Constructing customized practice exams..." : "Structuring dashboard panels...", time: 1600 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        processingStep.innerText = step.text;
      }, step.time);
    });

    setTimeout(async () => {
      if (useLiveAI) {
        try {
          const generatedData = await callGeminiAPI(apiKey, text);
          populateResults(generatedData);
          showResultsScreen();
        } catch (error) {
          console.error("Live AI Generation failed, falling back:", error);
          loadFallbackData(text);
        }
      } else {
        loadFallbackData(text);
      }
    }, 2000);
  }

  function loadFallbackData(text) {
    if (activeChapterKey === "custom" || ocrImageFile) {
      const localData = generateLocalNLPData(text);
      populateResults(localData);
    } else {
      populateResults();
    }
    showResultsScreen();
  }

  function showResultsScreen() {
    screenProcessing.classList.remove("active");
    screenResults.classList.add("active");
    
    appNavHome.classList.remove("active");
    appNavScan.classList.remove("active");
    appNavProfile.classList.remove("active");
  }

  function triggerCameraShutterFlash() {
    const shutter = document.getElementById("camera-shutter");
    if (shutter) {
      shutter.style.opacity = "1";
      setTimeout(() => {
        shutter.style.opacity = "0";
      }, 150);
    }
  }

  // ----------------------------------------
  // 7. PHYSICAL MOBILE CAMERA CAPTURE & OCR
  // ----------------------------------------
  if (appCameraTrigger && mobileCameraInput) {
    // When click "Scan Page with Camera" in simulated app, click the hidden input
    appCameraTrigger.addEventListener("click", () => {
      mobileCameraInput.click();
    });

    mobileCameraInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      ocrImageFile = file;
      const reader = new FileReader();
      reader.onload = (event) => {
        capturedImg.src = event.target.result;
        cameraPhotoPreview.classList.remove("hidden");
      };
      reader.readAsDataURL(file);
    });
  }

  if (cancelScanBtn) {
    cancelScanBtn.addEventListener("click", () => {
      cameraPhotoPreview.classList.add("hidden");
      capturedImg.src = "";
      ocrImageFile = null;
      mobileCameraInput.value = "";
    });
  }

  if (confirmScanBtn) {
    confirmScanBtn.addEventListener("click", () => {
      if (!ocrImageFile) return;

      // Start actual Tesseract OCR engine!
      runPhysicalPageOCR(ocrImageFile);
    });
  }

  async function runPhysicalPageOCR(file) {
    triggerCameraShutterFlash();

    // Transition to loading screen
    cameraPhotoPreview.classList.add("hidden");
    screenCamera.classList.remove("active");
    screenProcessing.classList.add("active");
    appCurrentBoard.innerText = `CBSE Real-Time Scan`;

    // Show scanning image preview
    processingMainStatus.innerText = "OCR Reading Page...";
    processingStep.innerText = "Initializing Tesseract Core...";
    scanningThumbnail.src = capturedImg.src;
    scanningThumbnailContainer.classList.remove("hidden");

    try {
      // 1. Initialize Tesseract recognition
      const result = await Tesseract.recognize(
        file,
        'eng',
        {
          logger: m => {
            if (m.status === 'recognizing text') {
              processingStep.innerText = `OCR Reading: ${Math.round(m.progress * 100)}%`;
            } else {
              // Convert kebab-case statuses to capitalized readable text
              const statusLabel = m.status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
              processingStep.innerText = `${statusLabel}...`;
            }
          }
        }
      );

      const extractedText = result.data.text.trim();
      console.log("OCR Scanned Text:", extractedText);

      if (extractedText.length < 20) {
        throw new Error("No readable textbook paragraph captured (text too short).");
      }

      // 2. Query LLM or Local NLP with extracted text
      processingMainStatus.innerText = "AI Structuring CBSE Quiz...";
      processingStep.innerText = "Building summaries & dynamic board exams...";

      const apiKey = geminiKeyInput.value.trim();
      if (apiKey.length > 0) {
        try {
          const generatedData = await callGeminiAPI(apiKey, extractedText);
          populateResults(generatedData);
          showResultsScreen();
        } catch (error) {
          console.error("Gemini API error on OCR text, falling back to local NLP:", error);
          const localData = generateLocalNLPData(extractedText);
          populateResults(localData);
          showResultsScreen();
        }
      } else {
        const localData = generateLocalNLPData(extractedText);
        populateResults(localData);
        showResultsScreen();
      }

    } catch (error) {
      console.error("OCR Scanning failed:", error);
      alert(`OCR Scan Notification:\n${error.message || "Unable to read textbook text from image. Make sure the page is flat and clear."}\n\nFalling back to CBSE pre-loaded Chapters.`);
      
      // Fallback
      ocrImageFile = null;
      activeChapterKey = "science-10";
      const data = chapterData[activeChapterKey];
      populateResults();
      showResultsScreen();
    }
  }

  // ----------------------------------------
  // 8. LIVE GEMINI API BRIDGING
  // ----------------------------------------
  async function callGeminiAPI(key, text) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    const prompt = `You are a professional CBSE Class 10 Board Exam Tutor. Analyze the following textbook text and generate a structured JSON object containing a cheat-sheet summary and a school board exam quiz.
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
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    quizState.answersSelected = [];
    quizState.completed = false;
    loadQuizQuestion();
  }

  // Quiz Engine Mechanisms
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

  function triggerConfetti() {
    const resultsContainer = document.getElementById("screen-results");
    if (!resultsContainer) return;

    const colors = ["#38bdf8", "#facc15", "#4ade80", "#f87171", "#a78bfa", "#fb923c"];
    
    for (let i = 0; i < 35; i++) {
      const p = document.createElement("div");
      p.className = "confetti";
      p.style.position = "absolute";
      p.style.width = `${Math.random() * 8 + 4}px`;
      p.style.height = `${Math.random() * 8 + 4}px`;
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.borderRadius = "50%";
      p.style.top = "-10px";
      p.style.left = `${Math.random() * 100}%`;
      p.style.opacity = Math.random() * 0.7 + 0.3;
      p.style.zIndex = "10";
      p.style.pointerEvents = "none";
      
      const duration = Math.random() * 2 + 1.2;
      const horizontalOffset = (Math.random() - 0.5) * 80;
      
      p.style.transition = `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      resultsContainer.appendChild(p);
      
      setTimeout(() => {
        p.style.transform = `translate(${horizontalOffset}px, 480px) rotate(${Math.random() * 360}deg)`;
        p.style.opacity = "0";
      }, 50);
      
      setTimeout(() => {
        p.remove();
      }, duration * 1000 + 100);
    }
  }

  function showQuizResults() {
    const data = activeDataObj ? activeDataObj : chapterData[activeChapterKey];
    
    triggerConfetti();
    
    quizProgressFill.style.width = "100%";
    quizQuestionText.style.display = "none";
    quizOptionsContainer.style.display = "none";
    quizNextBtn.classList.add("hidden");
    
    earnedXp.innerText = `${quizState.score}`;
    
    let rating = "";
    if (quizState.score === 50) {
      rating = "🏆 Phenomenal! Perfect score of 50 XP! You have master level understanding.";
    } else if (quizState.score >= 30) {
      rating = "🌟 Great performance! You earned solid XP. Review cheat sheet for remaining items.";
    } else {
      rating = "📚 Good try! Read the dynamic summary points and practice again.";
    }
    
    quizRatingMsg.innerText = rating;
    quizResultSlide.classList.remove("hidden");
  }

  quizRestartBtn.addEventListener("click", () => {
    quizState.currentQuestionIndex = 0;
    quizState.score = 0;
    loadQuizQuestion();
  });

  // Tabs Switching inside App Screen
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

  // App Footer buttons routing (SPA Controls)
  appNavHome.addEventListener("click", () => {
    resetAppScreen();
  });
  
  appNavScan.addEventListener("click", () => {
    resetAppScreen();
    // Simulate mobile camera file trigger directly when clicking scan tab!
    mobileCameraInput.click();
  });
  
  appNavProfile.addEventListener("click", () => {
    // Switch to internal Progress & financials screen
    screenCamera.classList.remove("active");
    screenProcessing.classList.remove("active");
    screenResults.classList.remove("active");
    screenProgressProfile.classList.add("active");

    appNavHome.classList.remove("active");
    appNavProfile.classList.add("active");
  });

  // ----------------------------------------
  // 9. LOCAL DYNAMIC NLP PARSER & QUIZ GENERATOR
  // ----------------------------------------
  function generateLocalNLPData(text) {
    // Helper to shuffle options and correct index
    function shuffleOptions(qText, optionsArray, correctIdx) {
      const correctText = optionsArray[correctIdx];
      const shuffled = [...optionsArray].sort(() => Math.random() - 0.5);
      const newCorrectIdx = shuffled.indexOf(correctText);
      return {
        q: qText,
        options: shuffled,
        correct: newCorrectIdx
      };
    }

    // Standard cleaning
    const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 15);
    
    while (sentences.length < 5) {
      sentences.push("Reviewing standard NCERT syllabus concepts for board preparations.");
    }
    
    const summary = [];
    for (let i = 0; i < 5; i++) {
      const words = sentences[i].split(" ");
      const firstTwo = words.slice(0, 2).join(" ");
      const rest = words.slice(2).join(" ");
      summary.push(`<strong>${firstTwo}:</strong> ${rest}`);
    }

    const allWords = text.replace(/[^a-zA-Z ]/g, "").split(" ").map(w => w.trim()).filter(w => w.length > 5);
    const uniqueWords = [...new Set(allWords)].slice(0, 8);
    
    while (uniqueWords.length < 4) {
      uniqueWords.push("Syllabus", "Concept", "Evaluation", "System");
    }

    const quiz = [
      shuffleOptions(
        `What is the primary academic focus of the passage: "${sentences[0].substring(0, 60)}..."?`,
        [
          sentences[0].split(" ").slice(0, 4).join(" "),
          "A completely deleted board syllabus topic",
          "An advanced college-level research paper",
          "A non-scholastic extra-curricular activity"
        ],
        0
      ),
      shuffleOptions(
        `Which of the following terms plays a central role in this textbook segment?`,
        [
          uniqueWords[0],
          uniqueWords[1] ? uniqueWords[1] : "Syllabus Standard",
          "An unrelated chemistry equation",
          "An ancient historical myth"
        ],
        0
      ),
      shuffleOptions(
        `Complete the following concept based on the text: "${sentences[2].substring(0, 40)}..."`,
        [
          sentences[2].split(" ").slice(0, 5).join(" "),
          "Is a minor point of negligible relevance",
          "Is not applicable under CBSE rules",
          "Is a localized state board exception"
        ],
        0
      ),
      shuffleOptions(
        `Which of the following is highlighted as a critical terminology in this context?`,
        [
          uniqueWords[2] ? uniqueWords[2] : "Syllabus",
          uniqueWords[3] ? uniqueWords[3] : "Academic Study",
          "A generic unrelated verb",
          "None of the above"
        ],
        0
      ),
      shuffleOptions(
        `What is the core learning outcome intended for a Class 10 student reading this?`,
        [
          "Logical comprehension and structured concept recall",
          "Vague, unguided internet browsing",
          "External college-level analysis",
          "Rote memorization without understanding"
        ],
        0
      )
    ];

    return {
      summary: summary,
      quiz: quiz
    };
  }
  
});
