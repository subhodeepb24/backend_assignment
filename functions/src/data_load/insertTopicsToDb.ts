const { MongoClient } = require("mongodb");
// MongoDB credentials for logging in, connecting and performing operations
// on collections in the database.
const username = "subhodeep";
const password = "pencil";
const dbName = "questions";
const topicsCollectionName = "topics";

// Function to load up topics data to MongoDB database collection.
// The schema: Collection name: 'topics'
/*  [ 
      {
        _id: string, // topic name of the current node
        children: string[] // array of topic names (nodes) which are descendants (all children) of '_id' node
      } 
    ]
*/

// Reasoning behind schema choice: We store all descendants (all children below current node) in the 'children' array
// so as to ensure fast and efficient retrieval of all relevant topics for which question numbers need to be retrieved
// based on the search topic. The trade-off hear is that add and update operations of nodes will be slightly more
// tediuos since they will need to add and update in multiple node levels across a tree path.
// The alternative approach can be to store only the immediate children nodes in the children array, in which case, 
// the search logic will have to recursively find all relevant topics (children nodes) by traversing through multiple
// tree paths which might lead to the Search API being slower and less efficient. And since, retrieval is a more common
// use-case than add/update operation of nodes, I went with this chosen approach.

export async function insertTopicsToDb() {
  // Setting up the MongoDB Atlas connection string 
  // using credentials to connect to database.
  const url = `mongodb+srv://${username}:${password}@cluster1.8nhci.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  try {
    // Connecting to MongoDB databsee cluster.
    await client.connect();
    console.log("Connected to MongoDB server...");

    // Initialising the database object.
    const db = client.db(dbName);
    // Initialising the topics collection object.
    const topics = db.collection(topicsCollectionName);
    // await topics.drop();

    // Inserting the topics data in the chosen schema.
    await topics.insertMany([
      {
        _id: "Chloroplasts",
        children: []
      },
      {
        _id: "Cell surface membrane",
        children: []
      },
      {
        _id: "Cell wall",
        children: []
      },
      {
        _id: "Cytoplasm",
        children: []
      },
      {
        _id: "Cell vacuoles (large, sap-filled in plant cells, small, temporary in animal cells)",
        children: []
      },
      {
        _id: "Nucleus",
        children: []
      },
      {
        _id: "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:",
        children: ["Chloroplasts", "Cell surface membrane", "Cell wall", "Cytoplasm", "Cell vacuoles (large, sap-filled in plant cells, small, temporary in animal cells)", "Nucleus"]
      },
      {
        _id: "Endoplasmic reticulum",
        children: []
      },
      {
        _id: "Mitochondria",
        children: []
      },
      {
        _id: "Golgi body",
        children: []
      },
      {
        _id: "Ribosomes",
        children: []
      },
      {
        _id: "Identify the following membrane systems and organelles from diagrams and electron micrographs:",
        children: ["Endoplasmic reticulum", "Mitochondria", "Golgi body", "Ribosomes"]
      },
      {
        _id: "Compare the structure of typical animal and plant cells",
        children: []
      },
      {
        _id: "State the functions of the membrane systems and organelles identified above",
        children: []
      },
      {
        _id: "Differentiate cell, tissue, organ and organ system",
        children: []
      },
      {
        _id: "Absorption – root hair cells",
        children: []
      },
      {
        _id: "Conduction and support – xylem vessels",
        children: []
      },
      {
        _id: "Transport of oxygen – red blood cells",
        children: []
      },
      {
        _id: "State, in simple terms, the relationship between cell function and cell structure for the following:",
        children: ["Absorption – root hair cells", "Conduction and support – xylem vessels", "Transport of oxygen – red blood cells"]
      },
      {
        _id: "Cell Structure and Organisation",
        children: ["Chloroplasts", "Cell surface membrane", "Cell wall", "Cytoplasm", "Cell vacuoles (large, sap-filled in plant cells, small, temporary in animal cells)", "Nucleus", "Endoplasmic reticulum", "Mitochondria", "Golgi body", "Ribosomes",
          "Absorption – root hair cells", "Conduction and support – xylem vessels", "Transport of oxygen – red blood cells", "Identify cell structures (including organelles) of typical plant and animal cells from diagrams, photomicrographs and as seen under the light microscope using prepared slides and fresh material treated with an appropriate temporary staining technique:",
          "Identify the following membrane systems and organelles from diagrams and electron micrographs:",
          "State, in simple terms, the relationship between cell function and cell structure for the following:"]
      },
      {
        _id: "Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans",
        children: []
      },
      {
        _id: "Define osmosis and describe the effects of osmosis on plant and animal tissues",
        children: []
      },
      {
        _id: "Define active transport and discuss its importance as an energy-consuming process by which substances are transported against a concentration gradient, as in ion uptake by root hairs and uptake of glucose by cells in the villi",
        children: []
      },
      {
        _id: "Movement of Substances",
        children: ["Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans",
          "Define osmosis and describe the effects of osmosis on plant and animal tissues",
          "Define active transport and discuss its importance as an energy-consuming process by which substances are transported against a concentration gradient, as in ion uptake by root hairs and uptake of glucose by cells in the villi"]
      },
      {
        _id: "State the roles of water in living organisms",
        children: []
      },
      {
        _id: "Carbohydrates",
        children: []
      },
      {
        _id: "Fats",
        children: []
      },
      {
        _id: "Proteins",
        children: []
      },
      {
        _id: "List the chemical elements which make up",
        children: ["Carbohydrates", "Fats", "Proteins"]
      },
      {
        _id: "Starch (iodine in potassium iodide solution)",
        children: []
      },
      {
        _id: "Reducing sugars (Benedict's solution)",
        children: []
      },
      {
        _id: "Protein (biuret test)",
        children: []
      },
      {
        _id: "Fats (ethanol emulsion)",
        children: []
      },
      {
        _id: "Describe and carry out tests for",
        children: ["Starch (iodine in potassium iodide solution)", "Reducing sugars (Benedict's solution)",
          "Protein (biuret test)", "Fats (ethanol emulsion)"]
      },
      {
        _id: "Glycogen from glucose",
        children: []
      },
      {
        _id: "Polypeptides and proteins from amino acids",
        children: []
      },
      {
        _id: "Lipids such as fats from glycerol and fatty acids",
        children: []
      },
      {
        _id: "State that large molecules are synthesised from smaller basic units",
        children: ["Glycogen from glucose", "Lipids such as fats from glycerol and fatty acids", "Polypeptides and proteins from amino acids"]
      },
      {
        _id: "Explain enzyme action in terms of the ‘lock and key’ hypothesis",
        children: []
      },
      {
        _id: "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity",
        children: []
      },
      {
        _id: "Investigate and explain the effects of temperature and pH on the rate of enzyme catalysed reactions",
        children: []
      },
      {
        _id: "Biological Molecules",
        children: ["State the roles of water in living organisms", "Carbohydrates", "Fats",
          "Proteins", "List the chemical elements which make up", "Starch (iodine in potassium iodide solution)",
          "Reducing sugars (Benedict's solution)", "Protein (biuret test)", "Fats (ethanol emulsion)",
          "Describe and carry out tests for", "Glycogen from glucose", "Polypeptides and proteins from amino acids",
          "Lipids such as fats from glycerol and fatty acids", "State that large molecules are synthesised from smaller basic units",
          "Explain enzyme action in terms of the ‘lock and key’ hypothesis",
          "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity",
          "Investigate and explain the effects of temperature and pH on the rate of enzyme catalysed reactions"
        ]
      },
      {
        _id: "Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate",
        children: []
      },
      {
        _id: "Describe peristalsis in terms of rhythmic wave-like contractions of the muscles to mix and propel the contents of the alimentary canal",
        children: []
      },
      {
        _id: "Describe the functions of enzymes (e.g. amylase, maltase, protease, lipase) in digestion, listing the substrates and end-products",
        children: []
      },
      {
        _id: "Describe the structure of a villus and its role, including the role of capillaries and lacteals in absorption",
        children: []
      },
      {
        _id: "State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver",
        children: []
      },
      {
        _id: "Carbohydrate metabolism",
        children: []
      },
      {
        _id: "Fat digestion",
        children: []
      },
      {
        _id: "Breakdown of red blood cells",
        children: []
      },
      {
        _id: "Metabolism of amino acids and the formation of urea",
        children: []
      },
      {
        _id: "Breakdown of alcohol",
        children: []
      },
      {
        _id: "Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications",
        children: []
      },
      {
        _id: "State the role of the liver in",
        children: ["Carbohydrate metabolism", "Fat digestion", "Metabolism of amino acids and the formation of urea",
          "Breakdown of alcohol", "Breakdown of red blood cells"]
      },
      {
        _id: "Nutrition in Humans",
        children: ["Carbohydrate metabolism", "Fat digestion", "Breakdown of alcohol", "Breakdown of red blood cells",
          "Metabolism of amino acids and the formation of urea", "State the role of the liver in",
          "Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications",
          "Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate",
          "Describe peristalsis in terms of rhythmic wave-like contractions of the muscles to mix and propel the contents of the alimentary canal",
          "Describe the functions of enzymes (e.g. amylase, maltase, protease, lipase) in digestion, listing the substrates and end-products",
          "Describe the structure of a villus and its role, including the role of capillaries and lacteals in absorption",
          "State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver"]
      },
      {
        _id: "Distribution of chloroplasts in photosynthesis",
        children: []
      },
      {
        _id: "Stomata and mesophyll cells in gaseous exchange",
        children: []
      },
      {
        _id: "Vascular bundles in transport",
        children: []
      },
      {
        _id: "Identify and label the cellular and tissue structure of a dicotyledonous leaf, as seen in transverse section using the light microscope and describe the significance of these features in terms of their functions, such as the",
        children: ["Vascular bundles in transport", "Distribution of chloroplasts in photosynthesis", "Stomata and mesophyll cells in gaseous exchange"]
      },
      {
        _id: "State the equation, in words and symbols, for photosynthesis",
        children: []
      },
      {
        _id: "Describe the intake of carbon dioxide and water by plants",
        children: []
      },
      {
        _id: "State that chlorophyll traps light energy and converts it into chemical energy for the formation of carbohydrates and their subsequent uses",
        children: []
      },
      {
        _id: "Investigate and discuss the effects of varying light intensity, carbon dioxide concentration and temperature on the rate of photosynthesis (e.g. in submerged aquatic plant)",
        children: []
      },
      {
        _id: "Discuss light intensity, carbon dioxide concentration and temperature as limiting factors on the rate of photosynthesis",
        children: []
      },
      {
        _id: "Nutrition in Plants",
        children: ["State the equation, in words and symbols, for photosynthesis",
          "Describe the intake of carbon dioxide and water by plants",
          "State that chlorophyll traps light energy and converts it into chemical energy for the formation of carbohydrates and their subsequent uses",
          "Investigate and discuss the effects of varying light intensity, carbon dioxide concentration and temperature on the rate of photosynthesis (e.g. in submerged aquatic plant)",
          "Discuss light intensity, carbon dioxide concentration and temperature as limiting factors on the rate of photosynthesis",
          "Vascular bundles in transport", "Distribution of chloroplasts in photosynthesis", "Stomata and mesophyll cells in gaseous exchange",
          "Identify and label the cellular and tissue structure of a dicotyledonous leaf, as seen in transverse section using the light microscope and describe the significance of these features in terms of their functions, such as the"]
      },
      {
        _id: "Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope",
        children: []
      },
      {
        _id: "Relate the structure and functions of root hairs to their surface area, and to water and ion uptake",
        children: []
      },
      {
        _id: "Explain the movement of water between plant cells, and between them and the environment in terms of water potential (calculations on water potential are not required)",
        children: []
      },
      {
        _id: "Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels",
        children: []
      },
      {
        _id: "Define the term transpiration and explain that transpiration is a consequence of gaseous exchange in plants",
        children: []
      },
      {
        _id: "Define the term translocation as the transport of food in the phloem tissue and illustrate the process through translocation studies",
        children: []
      },
      {
        _id: "The effects of variation of air movement, temperature, humidity and light intensity on transpiration rate",
        children: []
      },
      {
        _id: "How wilting occurs",
        children: []
      },
      {
        _id: "Describe and explain",
        children: ["How wilting occurs", "The effects of variation of air movement, temperature, humidity and light intensity on transpiration rate"]
      },
      {
        _id: "Transport in Flowering Plants",
        children: ["How wilting occurs", "The effects of variation of air movement, temperature, humidity and light intensity on transpiration rate",
          "Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope",
          "Relate the structure and functions of root hairs to their surface area, and to water and ion uptake",
          "Explain the movement of water between plant cells, and between them and the environment in terms of water potential (calculations on water potential are not required)",
          "Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels",
          "Define the term transpiration and explain that transpiration is a consequence of gaseous exchange in plants",
          "Define the term translocation as the transport of food in the phloem tissue and illustrate the process through translocation studies"]
      },
      {
        _id: "Identify the main blood vessels to and from the heart, lungs, liver and kidney",
        children: []
      },
      {
        _id: "List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions",
        children: []
      },
      {
        _id: "Relate the structure of arteries, veins and capillaries to their functions",
        children: []
      },
      {
        _id: "Describe the transfer of materials between capillaries and tissue fluid",
        children: []
      },
      {
        _id: "Describe the structure and function of the heart in terms of muscular contraction and the working of valves",
        children: []
      },
      {
        _id: "Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)",
        children: []
      },
      {
        _id: "Describe coronary heart disease in terms of the occlusion of coronary arteries and list the possible causes, such as diet, stress and smoking, stating the possible preventative measures",
        children: []
      },
      {
        _id: "Red blood cells – haemoglobin and oxygen transport",
        children: []
      },
      {
        _id: "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
        children: []
      },
      {
        _id: "White blood cells – phagocytosis, antibody formation and tissue rejection",
        children: []
      },
      {
        _id: "Platelets – fibrinogen to fibrin, causing clotting",
        children: []
      },
      {
        _id: "State the role of blood in transport and defence",
        children: ["Red blood cells – haemoglobin and oxygen transport", "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
          "White blood cells – phagocytosis, antibody formation and tissue rejection", "Platelets – fibrinogen to fibrin, causing clotting"]
      },
      {
        _id: "Transport in Humans",
        children: ["Red blood cells – haemoglobin and oxygen transport", "Plasma – transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins",
          "White blood cells – phagocytosis, antibody formation and tissue rejection", "Platelets – fibrinogen to fibrin, causing clotting",
          "State the role of blood in transport and defence", "Identify the main blood vessels to and from the heart, lungs, liver and kidney",
          "List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions", "Relate the structure of arteries, veins and capillaries to their functions",
          "Describe the transfer of materials between capillaries and tissue fluid", "Describe the structure and function of the heart in terms of muscular contraction and the working of valves",
          "Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)", "Describe coronary heart disease in terms of the occlusion of coronary arteries and list the possible causes, such as diet, stress and smoking, stating the possible preventative measures"]
      },
      {
        _id: "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
        children: []
      },
      {
        _id: "State the characteristics of, and describe the role of, the exchange surface of the alveoli in gas exchange",
        children: []
      },
      {
        _id: "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme",
        children: []
      },
      {
        _id: "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing",
        children: []
      },
      {
        _id: "Describe the effect of tobacco smoke and its major toxic components – nicotine, tar and carbon monoxide, on health",
        children: []
      },
      {
        _id: "Define and state the equation, in words and symbols, for aerobic respiration in humans",
        children: []
      },
      {
        _id: "Define and state the equation, in words only, for anaerobic respiration in humans",
        children: []
      },
      {
        _id: "Describe the effect of lactic acid in muscles during exercise",
        children: []
      },
      {
        _id: "Respiration in Humans",
        children: ["Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries",
          "State the characteristics of, and describe the role of, the exchange surface of the alveoli in gas exchange",
          "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme",
          "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing",
          "Describe the effect of tobacco smoke and its major toxic components – nicotine, tar and carbon monoxide, on health",
          "Define and state the equation, in words and symbols, for aerobic respiration in humans",
          "Define and state the equation, in words only, for anaerobic respiration in humans",
          "Describe the effect of lactic acid in muscles during exercise"]
      },
      {
        _id: "Define excretion and explain the importance of removing nitrogenous and other compounds from the body",
        children: []
      },
      {
        _id: "Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine",
        children: []
      },
      {
        _id: "Outline the role of anti-diuretic hormone (ADH) in osmoregulation",
        children: []
      },
      {
        _id: "Outline the mechanism of dialysis in the case of kidney failure",
        children: []
      },
      {
        _id: "Excretion in Humans",
        children: ["Define excretion and explain the importance of removing nitrogenous and other compounds from the body",
          "Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine",
          "Outline the role of anti-diuretic hormone (ADH) in osmoregulation",
          "Outline the mechanism of dialysis in the case of kidney failure"]
      },
      {
        _id: "Define homeostasis as the maintenance of a constant internal environment",
        children: []
      },
      {
        _id: "Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback",
        children: []
      },
      {
        _id: "Identify on a diagram of the skin: hairs, sweat glands, temperature receptors, blood vessels and fatty tissue",
        children: []
      },
      {
        _id: "Describe the maintenance of a constant body temperature in humans in terms of insulation and the role of: temperature receptors in the skin, sweating, shivering, blood vessels near the skin surface and the co-ordinating role of the hypothalamus",
        children: []
      },
      {
        _id: "Homeostasis",
        children: ["Define homeostasis as the maintenance of a constant internal environment",
          "Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback",
          "Identify on a diagram of the skin: hairs, sweat glands, temperature receptors, blood vessels and fatty tissue",
          "Describe the maintenance of a constant body temperature in humans in terms of insulation and the role of: temperature receptors in the skin, sweating, shivering, blood vessels near the skin surface and the co-ordinating role of the hypothalamus"]
      },
      {
        _id: "State the relationship between receptors, the central nervous system and the effectors",
        children: []
      },
      {
        _id: "Describe the structure of the eye as seen in front view and in horizontal section",
        children: []
      },
      {
        _id: "State the principal functions of component parts of the eye in producing a focused image of near and distant objects on the retina",
        children: []
      },
      {
        _id: "Describe the pupil reflex in response to bright and dim light",
        children: []
      },
      {
        _id: "State that the nervous system – brain, spinal cord and nerves, serves to co-ordinate and regulate bodily functions",
        children: []
      },
      {
        _id: "Outline the functions of sensory neurones, relay neurones and motor neurones",
        children: []
      },
      {
        _id: "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action",
        children: []
      },
      {
        _id: "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver",
        children: []
      },
      {
        _id: "Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas",
        children: []
      },
      {
        _id: "State the role of the hormone adrenaline in boosting blood glucose levels and give examples of situations in which this may occur",
        children: []
      },
      {
        _id: "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism",
        children: []
      },
      {
        _id: "Describe the signs, such as an increased blood glucose level and glucose in urine, and the treatment of diabetes mellitus using insulin",
        children: []
      },
      {
        _id: "Co-ordination and Response in Humans",
        children: ["State the relationship between receptors, the central nervous system and the effectors",
          "Describe the structure of the eye as seen in front view and in horizontal section",
          "State the principal functions of component parts of the eye in producing a focused image of near and distant objects on the retina",
          "Describe the pupil reflex in response to bright and dim light",
          "State that the nervous system – brain, spinal cord and nerves, serves to co-ordinate and regulate bodily functions",
          "Outline the functions of sensory neurones, relay neurones and motor neurones",
          "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action",
          "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver",
          "Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas",
          "State the role of the hormone adrenaline in boosting blood glucose levels and give examples of situations in which this may occur",
          "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism",
          "Describe the signs, such as an increased blood glucose level and glucose in urine, and the treatment of diabetes mellitus using insulin"]
      },
      {
        _id: "Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent",
        children: []
      },
      {
        _id: "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring",
        children: []
      },
      {
        _id: "Identify and draw, using a hand lens if necessary, the sepals, petals, stamens and carpels of one, locally available, named, insect-pollinated, dicotyledonous flower, and examine the pollen grains using a microscope",
        children: []
      },
      {
        _id: "State the functions of the sepals, petals, anthers and carpels",
        children: []
      },
      {
        _id: "Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope",
        children: []
      },
      {
        _id: "Outline the process of pollination and distinguish between self-pollination and cross-pollination",
        children: []
      },
      {
        _id: "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower",
        children: []
      },
      {
        _id: "Describe the growth of the pollen tube and its entry into the ovule followed by fertilisation (production of endosperm and details of development are not required)",
        children: []
      },
      {
        _id: "Identify on diagrams, the male reproductive system and give the functions of: testes, scrotum, sperm ducts, prostate gland, urethra and penis",
        children: []
      },
      {
        _id: "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina",
        children: []
      },
      {
        _id: "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only",
        children: []
      },
      {
        _id: "Describe fertilisation and early development of the zygote simply in terms of the formation of a ball of cells which becomes implanted in the wall of the uterus",
        children: []
      },
      {
        _id: "State the functions of the amniotic sac and the amniotic fluid",
        children: []
      },
      {
        _id: "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)",
        children: []
      },
      {
        _id: "Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled",
        children: []
      },
      {
        _id: "Reproduction",
        children: ["Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent",
          "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring",
          "Identify and draw, using a hand lens if necessary, the sepals, petals, stamens and carpels of one, locally available, named, insect-pollinated, dicotyledonous flower, and examine the pollen grains using a microscope",
          "State the functions of the sepals, petals, anthers and carpels",
          "Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope",
          "Outline the process of pollination and distinguish between self-pollination and cross-pollination",
          "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower",
          "Describe the growth of the pollen tube and its entry into the ovule followed by fertilisation (production of endosperm and details of development are not required)",
          "Identify on diagrams, the male reproductive system and give the functions of: testes, scrotum, sperm ducts, prostate gland, urethra and penis",
          "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina",
          "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only",
          "Describe fertilisation and early development of the zygote simply in terms of the formation of a ball of cells which becomes implanted in the wall of the uterus",
          "State the functions of the amniotic sac and the amniotic fluid",
          "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)",
          "Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled"]
      },
      {
        _id: "State the importance of mitosis in growth, repair and asexual reproduction",
        children: []
      },
      {
        _id: "Explain the need for the production of genetically identical cells",
        children: []
      },
      {
        _id: "Identify, with the aid of diagrams, the main stages of mitosis",
        children: []
      },
      {
        _id: "State what is meant by homologous pairs of chromosomes",
        children: []
      },
      {
        _id: "Identify, with the aid of diagrams, the main stages of meiosis (names of the sub-divisions of prophase are not required)",
        children: []
      },
      {
        _id: "Define the terms haploid and diploid, and explain the need for a reduction division process prior to fertilisation in sexual reproduction",
        children: []
      },
      {
        _id: "State how meiosis and fertilisation can lead to variation",
        children: []
      },
      {
        _id: "Cell Division",
        children: ["State the importance of mitosis in growth, repair and asexual reproduction",
          "Explain the need for the production of genetically identical cells",
          "Identify, with the aid of diagrams, the main stages of mitosis",
          "State what is meant by homologous pairs of chromosomes",
          "Identify, with the aid of diagrams, the main stages of meiosis (names of the sub-divisions of prophase are not required)",
          "Define the terms haploid and diploid, and explain the need for a reduction division process prior to fertilisation in sexual reproduction",
          "State how meiosis and fertilisation can lead to variation"]
      },
      {
        _id: "Outline the relationship between DNA, genes and chromosomes",
        children: []
      },
      {
        _id: "State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides",
        children: []
      },
      {
        _id: "State the rule of complementary base pairing",
        children: []
      },
      {
        _id: "State that DNA is used to carry the genetic code, which is used to synthesise specific polypeptides (details of transcription and translation are not required)",
        children: []
      },
      {
        _id: "State that each gene is a sequence of nucleotides, as part of a DNA molecule",
        children: []
      },
      {
        _id: "Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species – transgenic plants or animals",
        children: []
      },
      {
        _id: "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology",
        children: []
      },
      {
        _id: "Discuss the social and ethical implications of genetic engineering, with reference to a named example",
        children: []
      },
      {
        _id: "Molecular Genetics",
        children: ["Outline the relationship between DNA, genes and chromosomes", "State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides",
          "State the rule of complementary base pairing", "State that DNA is used to carry the genetic code, which is used to synthesise specific polypeptides (details of transcription and translation are not required)",
          "State that each gene is a sequence of nucleotides, as part of a DNA molecule", "Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species – transgenic plants or animals",
          "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology",
          "Discuss the social and ethical implications of genetic engineering, with reference to a named example"]
      },
      {
        _id: "Define a gene as a unit of inheritance and distinguish clearly between the terms gene and allele",
        children: []
      },
      {
        _id: "Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype",
        children: []
      },
      {
        _id: "Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation",
        children: []
      },
      {
        _id: "Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny",
        children: []
      },
      {
        _id: "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required)",
        children: []
      },
      {
        _id: "Explain co-dominance and multiple alleles with reference to the inheritance of the ABO blood group phenotypes (A, B, AB and O) and the gene alleles (Iᴬ, Iᴮ and Iᴼ)",
        children: []
      },
      {
        _id: "Describe the determination of sex in humans – XX and XY chromosomes",
        children: []
      },
      {
        _id: "Describe mutation as a change in the structure of a gene such as in sickle cell anaemia, or in the chromosome number, such as the 47 chromosomes in the condition known as Down syndrome",
        children: []
      },
      {
        _id: "Name radiation and chemicals as factors which may increase the rate of mutation",
        children: []
      },
      {
        _id: "Describe the difference between continuous and discontinuous variation and give examples of each",
        children: []
      },
      {
        _id: "State that variation and competition lead to differential survival of, and reproduction by, those organisms best fitted to the environment",
        children: []
      },
      {
        _id: "Give examples of environmental factors that act as forces of natural selection",
        children: []
      },
      {
        _id: "Explain the role of natural selection as a possible mechanism for evolution",
        children: []
      },
      {
        _id: "Give examples of artificial selection such as in the production of economically important plants and animals",
        children: []
      },
      {
        _id: "Inheritance",
        children: ["Define a gene as a unit of inheritance and distinguish clearly between the terms gene and allele",
          "Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype",
          "Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation",
          "Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny",
          "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required)",
          "Explain co-dominance and multiple alleles with reference to the inheritance of the ABO blood group phenotypes (A, B, AB and O) and the gene alleles (Iᴬ, Iᴮ and Iᴼ)",
          "Describe the determination of sex in humans – XX and XY chromosomes",
          "Describe mutation as a change in the structure of a gene such as in sickle cell anaemia, or in the chromosome number, such as the 47 chromosomes in the condition known as Down syndrome",
          "Name radiation and chemicals as factors which may increase the rate of mutation",
          "Describe the difference between continuous and discontinuous variation and give examples of each",
          "State that variation and competition lead to differential survival of, and reproduction by, those organisms best fitted to the environment",
          "Give examples of environmental factors that act as forces of natural selection",
          "Explain the role of natural selection as a possible mechanism for evolution",
          "Give examples of artificial selection such as in the production of economically important plants and animals"
        ]
      },
      {
        _id: "Briefly describe the non-cyclical nature of energy flow",
        children: []
      },
      {
        _id: "Explain the terms producer, consumer and trophic level in the context of food chains and food webs",
        children: []
      },
      {
        _id: "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels",
        children: []
      },
      {
        _id: "Describe and interpret pyramids of numbers and biomass",
        children: []
      },
      {
        _id: "Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks",
        children: []
      },
      {
        _id: "Water pollution by sewage and by inorganic waste",
        children: []
      },
      {
        _id: "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores",
        children: []
      },
      {
        _id: "Outline the roles of microorganisms in sewage treatment as an example of environmental biotechnology",
        children: []
      },
      {
        _id: "Discuss reasons for conservation of species with reference to the maintenance of biodiversity and how this is done, e.g. management of fisheries and management of timber production",
        children: []
      },
      {
        _id: "Evaluate the effects of",
        children: ["Water pollution by sewage and by inorganic waste", "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores"]
      },
      {
        _id: "Organisms and their Environment",
        children: ["Water pollution by sewage and by inorganic waste", "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores",
          "Evaluate the effects of", "Briefly describe the non-cyclical nature of energy flow", "Explain the terms producer, consumer and trophic level in the context of food chains and food webs",
          "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels",
          "Describe and interpret pyramids of numbers and biomass", "Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks",
          "Outline the roles of microorganisms in sewage treatment as an example of environmental biotechnology",
          "Discuss reasons for conservation of species with reference to the maintenance of biodiversity and how this is done, e.g. management of fisheries and management of timber production"]
      }
    ]);

    // Creating an index on the '_id' field to enable fast searches.
    await topics.createIndex({ _id: 1 });

  } catch (error) {
    console.log("Error in inserting topics data into database: " + error.stack);
  } finally {
    await client.close();
  }
}

// Wrapper function to invoke the data load function above.
insertTopicsToDb().then(result => {
  console.log('Inserting topics data to database completed!');
}).catch(error => console.log(error));