const { MongoClient } = require("mongodb");
// MongoDB credentials for logging in, connecting and performing operations
// on collections in the database.
const username = "subhodeep";
const password = "pencil";
const dbName = "questions";
const questionsCollectionName = "questions";

// Function to load up questions data to MongoDB database collection.
// The schema: Collection name: 'questions'
/*  [ 
      {
        _id: string, // question number
        annotations: string[] // array of annotations (topic names) associated with the question
      } 
    ]
*/

// Reasoning behind schema choice: We store the questions and relevant annotations in the above schema format
// so that the search operation on the 'questions' collection remains efficient and fast as it will involve an
// array query on the 'annotations' array based on the array of relevant topics retrieved based on the search topic
// using an 'in' operation. This way, the entire search function will always be 2 queries:
// 1. Retrieve all relevant topics based on a search topic from the topics collection.
// 2. Retrieve all relevant questions based on the topics array retrieved in (1) from the questions collection.

export async function insertQuestionsToDb() {
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
    const questions = db.collection(questionsCollectionName);
    // await topics.drop()

    // Inserting the questions data in the chosen schema.
    await questions.insertMany([
      { _id: "1", annotations: ["Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans", "Define active transport and discuss its importance as an energy-consuming process by which substances are transported against a concentration gradient, as in ion uptake by root hairs and uptake of glucose by cells in the villi", "Define homeostasis as the maintenance of a constant internal environment"] },
      { _id: "2", annotations: ["Golgi body", "Reducing sugars (Benedict's solution)", "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels", "Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas"] },
      { _id: "3", annotations: ["Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback", "Compare the structure of typical animal and plant cells", "Identify, with the aid of diagrams, the main stages of mitosis", "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only", "State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides"] },
      { _id: "4", annotations: ["Define and state the equation, in words only, for anaerobic respiration in humans", "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology", "Describe the transfer of materials between capillaries and tissue fluid"] },
      { _id: "5", annotations: ["State the roles of water in living organisms", "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity"] },
      { _id: "6", annotations: ["State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver", "Describe peristalsis in terms of rhythmic wave-like contractions of the muscles to mix and propel the contents of the alimentary canal"] },
      { _id: "7", annotations: ["Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope", "State the functions of the amniotic sac and the amniotic fluid", "Cell surface membrane", "Conduction and support ??? xylem vessels"] },
      { _id: "8", annotations: ["Cytoplasm"] },
      { _id: "9", annotations: ["Lipids such as fats from glycerol and fatty acids", "Distribution of chloroplasts in photosynthesis"] },
      { _id: "10", annotations: ["Explain enzyme action in terms of the ???lock and key??? hypothesis"] },
      { _id: "11", annotations: ["Mitochondria"] },
      { _id: "12", annotations: ["State the functions of the amniotic sac and the amniotic fluid", "Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels"] },
      { _id: "13", annotations: ["Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans"] },
      { _id: "14", annotations: ["Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny", "Proteins"] },
      { _id: "15", annotations: ["Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled", "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism", "Describe the structure of the eye as seen in front view and in horizontal section", "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing", "Chloroplasts"] },
      { _id: "16", annotations: ["Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores"] },
      { _id: "17", annotations: ["Describe the maintenance of a constant body temperature in humans in terms of insulation and the role of: temperature receptors in the skin, sweating, shivering, blood vessels near the skin surface and the co-ordinating role of the hypothalamus"] },
      { _id: "18", annotations: ["Explain the terms producer, consumer and trophic level in the context of food chains and food webs"] },
      { _id: "19", annotations: ["State the relationship between receptors, the central nervous system and the effectors", "Nucleus", "Explain enzyme action in terms of the ???lock and key??? hypothesis"] },
      { _id: "20", annotations: ["Protein (biuret test)", "Starch (iodine in potassium iodide solution)", "Describe the signs, such as an increased blood glucose level and glucose in urine, and the treatment of diabetes mellitus using insulin", "Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species ??? transgenic plants or animals"] },
      { _id: "21", annotations: ["Cytoplasm"] },
      { _id: "22", annotations: ["Define and state the equation, in words and symbols, for aerobic respiration in humans"] },
      { _id: "23", annotations: ["Briefly describe the non-cyclical nature of energy flow", "Describe the structure of the eye as seen in front view and in horizontal section", "Nucleus", "Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate", "Define and state the equation, in words only, for anaerobic respiration in humans"] },
      { _id: "24", annotations: ["Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism", "Explain the movement of water between plant cells, and between them and the environment in terms of water potential(calculations on water potential are not required)", "Protein(biuret test)"] },
      { _id: "25", annotations: ["Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only", "Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only", "Breakdown of red blood cells"] },
      { _id: "26", annotations: ["Polypeptides and proteins from amino acids", "Water pollution by sewage and by inorganic waste"] },
      { _id: "27", annotations: ["Outline the role of anti-diuretic hormone (ADH) in osmoregulation", "Describe the structure and function of the heart in terms of muscular contraction and the working of valves", "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required)"] },
      { _id: "28", annotations: ["State the characteristics of, and describe the role of, the exchange surface of the alveoli in gas exchange"] },
      { _id: "29", annotations: ["Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring"] },
      { _id: "30", annotations: ["State the relationship between receptors, the central nervous system and the effectors"] },
      { _id: "31", annotations: ["Outline the relationship between DNA, genes and chromosomes", "Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny", "Red blood cells ??? haemoglobin and oxygen transport", "Define and state the equation, in words only, for anaerobic respiration in humans"] },
      { _id: "32", annotations: ["Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation"] },
      { _id: "33", annotations: ["Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity"] },
      { _id: "34", annotations: ["State that each gene is a sequence of nucleotides, as part of a DNA molecule", "Breakdown of red blood cells"] },
      { _id: "35", annotations: ["Describe the structure of the eye as seen in front view and in horizontal section"] },
      { _id: "36", annotations: ["Describe mutation as a change in the structure of a gene such as in sickle cell anaemia, or in the chromosome number, such as the 47 chromosomes in the condition known as Down syndrome"] },
      { _id: "37", annotations: ["Describe the maintenance of a constant body temperature in humans in terms of insulation and the role of: temperature receptors in the skin, sweating, shivering, blood vessels near the skin surface and the co-ordinating role of the hypothalamus", "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower", "Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope", "Name radiation and chemicals as factors which may increase the rate of mutation", "Carbohydrates"] },
      { _id: "38", annotations: ["Polypeptides and proteins from amino acids", "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity"] },
      { _id: "39", annotations: ["Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing"] },
      { _id: "40", annotations: ["Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans"] },
      { _id: "41", annotations: ["Endoplasmic reticulum", "Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent"] },
      { _id: "42", annotations: ["Discuss the social and ethical implications of genetic engineering, with reference to a named example"] },
      { _id: "43", annotations: ["Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species ??? transgenic plants or animals"] },
      { _id: "44", annotations: ["State that each gene is a sequence of nucleotides, as part of a DNA molecule"] },
      { _id: "45", annotations: ["Endoplasmic reticulum", "Glycogen from glucose", "State the functions of the amniotic sac and the amniotic fluid", "Glycogen from glucose"] },
      { _id: "46", annotations: ["Breakdown of alcohol"] },
      { _id: "47", annotations: ["Describe the structure of a villus and its role, including the role of capillaries and lacteals in absorption"] },
      { _id: "48", annotations: ["Chloroplasts", "Give examples of artificial selection such as in the production of economically important plants and animals", "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring"] },
      { _id: "49", annotations: ["Identify on diagrams, the male reproductive system and give the functions of: testes, scrotum, sperm ducts, prostate gland, urethra and penis", "Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation"] },
      { _id: "50", annotations: ["Nucleus"] },
      { _id: "51", annotations: ["Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine", "Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype"] },
      { _id: "52", annotations: ["Give examples of environmental factors that act as forces of natural selection", "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower"] },
      { _id: "53", annotations: ["State the relationship between receptors, the central nervous system and the effectors", "Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope"] },
      { _id: "54", annotations: ["Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope"] },
      { _id: "55", annotations: ["Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback", "Explain enzyme action in terms of the ???lock and key??? hypothesis"] },
      { _id: "56", annotations: ["Distribution of chloroplasts in photosynthesis", "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)", "Reducing sugars (Benedict's solution) ", "Transport of oxygen ??? red blood cells", "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products(structural details are not required)"] },
      { _id: "57", annotations: ["Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels"] },
      { _id: "58", annotations: ["Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring", "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology", "Define excretion and explain the importance of removing nitrogenous and other compounds from the body", "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism"] },
      { _id: "59", annotations: ["State that each gene is a sequence of nucleotides, as part of a DNA molecule", "Describe the functions of enzymes (e.g. amylase, maltase, protease, lipase) in digestion, listing the substrates and end-products", "Mitochondria"] },
      { _id: "60", annotations: ["Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate"] },
      { _id: "61", annotations: ["Fats", "Platelets ??? fibrinogen to fibrin, causing clotting", "Define and state the equation, in words only, for anaerobic respiration in humans", "Define diffusion and describe its role in nutrient uptake and gaseous exchange in plants and humans"] },
      { _id: "62", annotations: ["Describe the structure of a villus and its role, including the role of capillaries and lacteals in absorption"] },
      { _id: "63", annotations: ["Breakdown of alcohol"] },
      { _id: "64", annotations: ["Outline the role of anti-diuretic hormone (ADH) in osmoregulation", "Polypeptides and proteins from amino acids", "Nucleus"] },
      { _id: "65", annotations: ["Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina", "State the functions of the sepals, petals, anthers and carpels"] },
      { _id: "66", annotations: ["Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks", "Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks", "State the roles of water in living organisms", "Cell surface membrane", "State the equation, in words and symbols, for photosynthesis"] },
      { _id: "67", annotations: ["Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity"] },
      { _id: "68", annotations: ["Relate the structure of arteries, veins and capillaries to their functions"] },
      { _id: "69", annotations: ["Discuss the social and ethical implications of genetic engineering, with reference to a named example", "Outline the process of pollination and distinguish between self-pollination and cross-pollination"] },
      { _id: "70", annotations: ["Explain the terms producer, consumer and trophic level in the context of food chains and food webs", "Identify, with the aid of diagrams, the main stages of meiosis (names of the sub-divisions of prophase are not required)"] },
      { _id: "71", annotations: ["Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries"] },
      { _id: "72", annotations: ["Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species ??? transgenic plants or animals"] },
      { _id: "73", annotations: ["Use a hand lens to identify and describe the stamens and stigmas of one, locally available, named, wind-pollinated flower, and examine the pollen grains using a microscope", "Plasma ??? transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins", "State that each gene is a sequence of nucleotides, as part of a DNA molecule", "Define and state the equation, in words only, for anaerobic respiration in humans"] },
      { _id: "74", annotations: ["Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)"] },
      { _id: "75", annotations: ["Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks", "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action"] },
      { _id: "76", annotations: ["Cytoplasm", "Lipids such as fats from glycerol and fatty acids"] },
      { _id: "77", annotations: ["Explain enzyme action in terms of the ???lock and key??? hypothesis", "Name radiation and chemicals as factors which may increase the rate of mutation"] },
      { _id: "78", annotations: ["Vascular bundles in transport", "Protein (biuret test)"] },
      { _id: "79", annotations: ["Outline the relationship between DNA, genes and chromosomes", "Describe and interpret pyramids of numbers and biomass"] },
      { _id: "80", annotations: ["State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver", "Discuss the social and ethical implications of genetic engineering, with reference to a named example"] },
      { _id: "81", annotations: ["Name radiation and chemicals as factors which may increase the rate of mutation"] },
      { _id: "82", annotations: ["Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications", "Compare the structure of typical animal and plant cells"] },
      { _id: "83", annotations: ["Outline the mechanism of dialysis in the case of kidney failure", "Briefly describe the non-cyclical nature of energy flow", "Cytoplasm"] },
      { _id: "84", annotations: ["Stomata and mesophyll cells in gaseous exchange"] },
      { _id: "85", annotations: ["Describe the determination of sex in humans ??? XX and XY chromosomes"] },
      { _id: "86", annotations: ["State the importance of mitosis in growth, repair and asexual reproduction", "Describe and interpret pyramids of numbers and biomass"] },
      { _id: "87", annotations: ["State how meiosis and fertilisation can lead to variation", "How wilting occurs", "Identify on a diagram of the skin: hairs, sweat glands, temperature receptors, blood vessels and fatty tissue", "Chloroplasts", "Give examples of artificial selection such as in the production of economically important plants and animals"] },
      { _id: "88", annotations: ["Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries"] },
      { _id: "89", annotations: ["State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver", "Describe the structure and function of the heart in terms of muscular contraction and the working of valves", "State how meiosis and fertilisation can lead to variation", "Identify, with the aid of diagrams, the main stages of meiosis (names of the sub-divisions of prophase are not required)"] },
      { _id: "90", annotations: ["Describe the functions of main regions of the alimentary canal and the associated organs: mouth, salivary glands, oesophagus, stomach, duodenum, pancreas, gall bladder, liver, ileum, colon, rectum, anus, in relation to ingestion, digestion, absorption, assimilation and egestion of food, as appropriate"] },
      { _id: "91", annotations: ["State the functions of the sepals, petals, anthers and carpels"] },
      { _id: "92", annotations: ["State the importance of mitosis in growth, repair and asexual reproduction", "State the importance of mitosis in growth, repair and asexual reproduction", "Outline the functions of sensory neurones, relay neurones and motor neurones", "Proteins", "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver"] },
      { _id: "93", annotations: ["Describe and interpret pyramids of numbers and biomass"] },
      { _id: "94", annotations: ["State the functions of the membrane systems and organelles identified above"] },
      { _id: "95", annotations: ["Plasma ??? transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins"] },
      { _id: "96", annotations: ["Ribosomes"] },
      { _id: "97", annotations: ["State the principal functions of component parts of the eye in producing a focused image of near and distant objects on the retina", "White blood cells ??? phagocytosis, antibody formation and tissue rejection"] },
      { _id: "98", annotations: ["Give examples of artificial selection such as in the production of economically important plants and animals"] },
      { _id: "99", annotations: ["Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology"] },
      { _id: "100", annotations: ["Endoplasmic reticulum"] },
      { _id: "101", annotations: ["Explain the need for the production of genetically identical cells", "Describe the effect of lactic acid in muscles during exercise"] },
      { _id: "102", annotations: ["Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores"] },
      { _id: "103", annotations: ["Discuss the social and ethical implications of genetic engineering, with reference to a named example", "Give examples of environmental factors that act as forces of natural selection"] },
      { _id: "104", annotations: ["Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)"] },
      { _id: "105", annotations: ["State that each gene is a sequence of nucleotides, as part of a DNA molecule", "Absorption ??? root hair cells"] },
      { _id: "106", annotations: ["Name radiation and chemicals as factors which may increase the rate of mutation", "Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels", "Explain what is meant by an endocrine gland, with reference to the islets of Langerhans in the pancreas", "Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent", "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina"] },
      { _id: "107", annotations: ["Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing", "Investigate and discuss the effects of varying light intensity, carbon dioxide concentration and temperature on the rate of photosynthesis (e.g. in submerged aquatic plant)", "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism", "Outline the relationship between DNA, genes and chromosomes", "Fats (ethanol emulsion)"] },
      { _id: "108", annotations: ["Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries", "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries"] },
      { _id: "109", annotations: ["State the equation, in words and symbols, for photosynthesis", "Identify and draw, using a hand lens if necessary, the sepals, petals, stamens and carpels of one, locally available, named, insect-pollinated, dicotyledonous flower, and examine the pollen grains using a microscope", "Compare, using fresh specimens, an insect-pollinated and a wind-pollinated flower", "Describe the determination of sex in humans ??? XX and XY chromosomes", "Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope"] },
      { _id: "110", annotations: ["Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme", "State the function of the hepatic portal vein as the transport of blood rich in absorbed nutrients from the small intestine to the liver"] },
      { _id: "111", annotations: ["Outline the pathway by which water is transported from the roots to the leaves through the xylem vessels", "Carbohydrates", "Describe the effect of lactic acid in muscles during exercise", "Relate the structure of arteries, veins and capillaries to their functions", "Water pollution by sewage and by inorganic waste"] },
      { _id: "112", annotations: ["Glycogen from glucose"] },
      { _id: "113", annotations: ["Describe how carbon is cycled within an ecosystem and outline the role of forests and oceans as carbon sinks"] },
      { _id: "114", annotations: ["Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine"] },
      { _id: "115", annotations: ["Nucleus"] },
      { _id: "116", annotations: ["Carbohydrates", "Give examples of environmental factors that act as forces of natural selection"] },
      { _id: "117", annotations: ["Describe the determination of sex in humans ??? XX and XY chromosomes", "Describe the transfer of materials between capillaries and tissue fluid", "Conduction and support ??? xylem vessels", "Describe the determination of sex in humans ??? XX and XY chromosomes", "White blood cells ??? phagocytosis, antibody formation and tissue rejection"] },
      { _id: "118", annotations: ["Ribosomes", "Plasma ??? transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins", "Cell vacuoles (large, sap-filled in plant cells, small, temporary in animal cells)", "Define homeostasis as the maintenance of a constant internal environment", "Water pollution by sewage and by inorganic waste"] },
      { _id: "119", annotations: ["Discuss light intensity, carbon dioxide concentration and temperature as limiting factors on the rate of photosynthesis", "Outline the role of anti-diuretic hormone (ADH) in osmoregulation"] },
      { _id: "120", annotations: ["Identify, with the aid of diagrams, the main stages of mitosis", "Protein (biuret test)", "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity", "Fats", "Outline the function of the nephron with reference to ultra-filtration and selective reabsorption in the production of urine"] },
      { _id: "121", annotations: ["Define homeostasis as the maintenance of a constant internal environment", "Plasma ??? transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins", "State the importance of mitosis in growth, repair and asexual reproduction", "Ribosomes", "Explain the terms producer, consumer and trophic level in the context of food chains and food webs"] },
      { _id: "122", annotations: ["State the characteristics of, and describe the role of, the exchange surface of the alveoli in gas exchange", "Outline the role of anti-diuretic hormone (ADH) in osmoregulation", "Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action", "State that chlorophyll traps light energy and converts it into chemical energy for the formation of carbohydrates and their subsequent uses", "Identify on diagrams, the male reproductive system and give the functions of: testes, scrotum, sperm ducts, prostate gland, urethra and penis"] },
      { _id: "123", annotations: ["Golgi body", "Fat digestion", "Describe the effect of lactic acid in muscles during exercise", "Describe the difference between continuous and discontinuous variation and give examples of each", "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme"] },
      { _id: "124", annotations: ["Discuss the social and ethical implications of genetic engineering, with reference to a named example"] },
      { _id: "125", annotations: ["Explain the need for the production of genetically identical cells", "Describe the structure of the eye as seen in front view and in horizontal section", "Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications", "Describe fertilisation and early development of the zygote simply in terms of the formation of a ball of cells which becomes implanted in the wall of the uterus"] },
      { _id: "126", annotations: ["Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)", "State that DNA is used to carry the genetic code, which is used to synthesise specific polypeptides (details of transcription and translation are not required)"] },
      { _id: "127", annotations: ["How wilting occurs", "White blood cells ??? phagocytosis, antibody formation and tissue rejection", "Explain enzyme action in terms of the ???lock and key??? hypothesis"] },
      { _id: "128", annotations: ["Proteins"] },
      { _id: "129", annotations: ["Explain the basic principles of homeostasis in terms of stimulus resulting from a change in the internal environment, a corrective mechanism and negative feedback", "The effects of variation of air movement, temperature, humidity and light intensity on transpiration rate", "Fats (ethanol emulsion)", "Stomata and mesophyll cells in gaseous exchange"] },
      { _id: "130", annotations: ["Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled", "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver"] },
      { _id: "131", annotations: ["Outline the cardiac cycle in terms of what happens during systole and diastole (histology of the heart muscle, names of nerves and transmitter substances are not required)", "Carbohydrate metabolism"] },
      { _id: "132", annotations: ["Absorption ??? root hair cells"] },
      { _id: "133", annotations: ["Describe fertilisation and early development of the zygote simply in terms of the formation of a ball of cells which becomes implanted in the wall of the uterus", "Breakdown of red blood cells"] },
      { _id: "134", annotations: ["Carbohydrates"] },
      { _id: "135", annotations: ["Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing"] },
      { _id: "136", annotations: ["Describe peristalsis in terms of rhythmic wave-like contractions of the muscles to mix and propel the contents of the alimentary canal"] },
      { _id: "137", annotations: ["Plasma ??? transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins", "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required)"] },
      { _id: "138", annotations: ["State the functions of the amniotic sac and the amniotic fluid"] },
      { _id: "139", annotations: ["Absorption ??? root hair cells"] },
      { _id: "140", annotations: ["Define excretion and explain the importance of removing nitrogenous and other compounds from the body"] },
      { _id: "141", annotations: ["Describe the difference between continuous and discontinuous variation and give examples of each"] },
      { _id: "142", annotations: ["Cytoplasm"] },
      { _id: "143", annotations: ["Give examples of environmental factors that act as forces of natural selection"] },
      { _id: "144", annotations: ["Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels", "White blood cells ??? phagocytosis, antibody formation and tissue rejection", "State that DNA is used to carry the genetic code, which is used to synthesise specific polypeptides (details of transcription and translation are not required)"] },
      { _id: "145", annotations: ["State that chlorophyll traps light energy and converts it into chemical energy for the formation of carbohydrates and their subsequent uses", "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing", "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores"] },
      { _id: "146", annotations: ["State the roles of water in living organisms"] },
      { _id: "147", annotations: ["Define excretion and explain the importance of removing nitrogenous and other compounds from the body", "Transport of oxygen ??? red blood cells"] },
      { _id: "148", annotations: ["State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides"] },
      { _id: "149", annotations: ["State what is meant by homologous pairs of chromosomes"] },
      { _id: "150", annotations: ["Outline the relationship between DNA, genes and chromosomes"] },
      { _id: "151", annotations: ["Distribution of chloroplasts in photosynthesis", "Outline the functions of sensory neurones, relay neurones and motor neurones"] },
      { _id: "152", annotations: ["Describe the effects of excessive consumption of alcohol: reduced self-control, depressant, effect on reaction times, damage to liver and social implications", "Explain how the blood glucose concentration is regulated by insulin and glucagon as a homeostatic mechanism"] },
      { _id: "153", annotations: ["Outline the mechanism of dialysis in the case of kidney failure", "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)", "Investigate and explain the effects of temperature and pH on the rate of enzyme catalysed reactions"] },
      { _id: "154", annotations: ["Stomata and mesophyll cells in gaseous exchange"] },
      { _id: "155", annotations: ["Identify and draw, using a hand lens if necessary, the sepals, petals, stamens and carpels of one, locally available, named, insect-pollinated, dicotyledonous flower, and examine the pollen grains using a microscope", "Discuss the social and ethical implications of genetic engineering, with reference to a named example", "White blood cells ??? phagocytosis, antibody formation and tissue rejection", "State how meiosis and fertilisation can lead to variation", "Fat digestion"] },
      { _id: "156", annotations: ["Compare the structure of typical animal and plant cells", "Golgi body"] },
      { _id: "157", annotations: ["Briefly describe the non-cyclical nature of energy flow"] },
      { _id: "158", annotations: ["Outline the process of pollination and distinguish between self-pollination and cross-pollination", "Water pollution by sewage and by inorganic waste", "The effects of variation of air movement, temperature, humidity and light intensity on transpiration rate", "Pollution due to insecticides including bioaccumulation up food chains and impact on top carnivores", "Breakdown of red blood cells"] },
      { _id: "159", annotations: ["Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required)"] },
      { _id: "160", annotations: ["Identify, with the aid of diagrams, the main stages of mitosis"] },
      { _id: "161", annotations: ["Identify, with the aid of diagrams, the main stages of meiosis (names of the sub-divisions of prophase are not required)", "Describe the effect of lactic acid in muscles during exercise"] },
      { _id: "162", annotations: ["Outline the relationship between DNA, genes and chromosomes", "Explain that genes may be transferred between cells. Reference should be made to the transfer of genes between organisms of the same species or different species ??? transgenic plants or animals", "How wilting occurs", "Discuss the social and ethical implications of genetic engineering, with reference to a named example"] },
      { _id: "163", annotations: ["Nucleus"] },
      { _id: "164", annotations: ["Cell surface membrane", "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries"] },
      { _id: "165", annotations: ["White blood cells ??? phagocytosis, antibody formation and tissue rejection"] },
      { _id: "166", annotations: ["Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent", "Fats (ethanol emulsion)"] },
      { _id: "167", annotations: ["Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled", "Define a hormone as a chemical substance, produced by a gland, carried by the blood, which alters the activity of one or more specific target organs and is then destroyed by the liver"] },
      { _id: "168", annotations: ["Red blood cells ??? haemoglobin and oxygen transport", "State the relationship between receptors, the central nervous system and the effectors"] },
      { _id: "169", annotations: ["Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina"] },
      { _id: "170", annotations: ["Define asexual reproduction as the process resulting in the production of genetically identical offspring from one parent"] },
      { _id: "171", annotations: ["Conduction and support ??? xylem vessels", "Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina", "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme", "Protein (biuret test)", "State the relationship between receptors, the central nervous system and the effectors"] },
      { _id: "172", annotations: ["Plasma ??? transport of blood cells, ions, soluble food substances, hormones, carbon dioxide, urea, vitamins, plasma proteins"] },
      { _id: "173", annotations: ["Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina", "Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries", "Define excretion and explain the importance of removing nitrogenous and other compounds from the body", "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme"] },
      { _id: "174", annotations: ["Lipids such as fats from glycerol and fatty acids"] },
      { _id: "175", annotations: ["Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme"] },
      { _id: "176", annotations: ["Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring", "State the functions of the membrane systems and organelles identified above", "Water pollution by sewage and by inorganic waste", "Cell surface membrane", "State the roles of water in living organisms"] },
      { _id: "177", annotations: ["Define excretion and explain the importance of removing nitrogenous and other compounds from the body"] },
      { _id: "178", annotations: ["List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions", "Use genetic diagrams to solve problems involving monohybrid inheritance (genetic diagrams involving autosomal linkage or epistasis are not required)", "Reducing sugars (Benedict's solution) ", "Glycogen from glucose", "Platelets ??? fibrinogen to fibrin, causing clotting"] },
      { _id: "179", annotations: ["Identify on diagrams, the female reproductive system and give the functions of: ovaries, oviducts, uterus, cervix and vagina", "State that the nervous system ??? brain, spinal cord and nerves, serves to co-ordinate and regulate bodily functions"] },
      { _id: "180", annotations: ["Identify the positions and explain the functions of xylem vessels, phloem (sieve tube elements and companion cells) in sections of a herbaceous dicotyledonous leaf and stem, using the light microscope", "Describe the structure of the eye as seen in front view and in horizontal section", "State that variation and competition lead to differential survival of, and reproduction by, those organisms best fitted to the environment", "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology"] },
      { _id: "181", annotations: ["Describe and interpret pyramids of numbers and biomass", "Define sexual reproduction as the process involving the fusion of nuclei to form a zygote and the production of genetically dissimilar offspring", "Describe the growth of the pollen tube and its entry into the ovule followed by fertilisation (production of endosperm and details of development are not required)", "Polypeptides and proteins from amino acids", "Explain how energy losses occur along food chains, and discuss the efficiency of energy transfer between trophic levels"] },
      { _id: "182", annotations: ["Outline the process of pollination and distinguish between self-pollination and cross-pollination", "Describe the transfer of materials between capillaries and tissue fluid", "Describe the role of cilia, diaphragm, ribs and intercostal muscles in breathing", "Explain the terms producer, consumer and trophic level in the context of food chains and food webs", "Carbohydrates"] },
      { _id: "183", annotations: ["Describe the intake of carbon dioxide and water by plants", "Glycogen from glucose"] },
      { _id: "184", annotations: ["Identify on diagrams and name the larynx, trachea, bronchi, bronchioles, alveoli and associated capillaries", "Cell vacuoles (large, sap-filled in plant cells, small, temporary in animal cells)", "Carbohydrate metabolism", "Outline the functions of sensory neurones, relay neurones and motor neurones"] },
      { _id: "185", annotations: ["Breakdown of alcohol"] },
      { _id: "186", annotations: ["Red blood cells ??? haemoglobin and oxygen transport"] },
      { _id: "187", annotations: ["Define active transport and discuss its importance as an energy-consuming process by which substances are transported against a concentration gradient, as in ion uptake by root hairs and uptake of glucose by cells in the villi", "State the functions of the amniotic sac and the amniotic fluid"] },
      { _id: "188", annotations: ["Fats (ethanol emulsion)", "Define and state the equation, in words only, for anaerobic respiration in humans", "Breakdown of red blood cells", "Conduction and support ??? xylem vessels", "Cytoplasm"] },
      { _id: "189", annotations: ["Discuss the function of the brain and spinal cord in producing a co-ordinated response as a result of a specific stimulus in a reflex action", "Golgi body", "Explain co-dominance and multiple alleles with reference to the inheritance of the ABO blood group phenotypes (A, B, AB and O) and the gene alleles (I???, I??? and I???)", "Describe the intake of carbon dioxide and water by plants"] },
      { _id: "190", annotations: ["Explain why observed ratios often differ from expected ratios, especially when there are small numbers of progeny", "Chloroplasts", "Describe the function of the placenta and umbilical cord in relation to exchange of dissolved nutrients, gases and excretory products (structural details are not required)"] },
      { _id: "191", annotations: ["Predict the results of simple crosses with expected ratios of 3:1 and 1:1, using the terms homozygous, heterozygous, F1 generation and F2 generation"] },
      { _id: "192", annotations: ["Identify on a diagram of the skin: hairs, sweat glands, temperature receptors, blood vessels and fatty tissue"] },
      { _id: "193", annotations: ["Briefly describe the menstrual cycle with reference to the alternation of menstruation and ovulation, the natural variation in its length, and the fertile and infertile phases of the cycle with reference to the effects of progesterone and estrogen only"] },
      { _id: "194", annotations: ["Describe coronary heart disease in terms of the occlusion of coronary arteries and list the possible causes, such as diet, stress and smoking, stating the possible preventative measures"] },
      { _id: "195", annotations: ["List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions", "Outline the mechanism of dialysis in the case of kidney failure", "Briefly explain how a gene that controls the production of human insulin can be inserted into bacterial DNA to produce human insulin in medical biotechnology"] },
      { _id: "196", annotations: ["Conduction and support ??? xylem vessels"] },
      { _id: "197", annotations: ["Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype", "Discuss the spread of human immunodeficiency virus (HIV) and methods by which it may be controlled", "Explain the mode of action of enzymes in terms of an active site, enzyme-substrate complex, lowering of activation energy and enzyme specificity"] },
      { _id: "198", annotations: ["Explain the terms dominant, recessive, codominant, homozygous, heterozygous, phenotype and genotype", "How wilting occurs", "Describe the removal of carbon dioxide from the lungs, including the role of the carbonic anhydrase enzyme", "State the structure of DNA in terms of the bases, sugar and phosphate groups found in each of their nucleotides", "List the different ABO blood groups and all possible combinations for the donor and recipient in blood transfusions"] },
      { _id: "199", annotations: ["Reducing sugars (Benedict's solution) "] }
    ]);

    // Creating an index on the 'annotations' field (topic array) to enable fast searches.
    await questions.createIndex({ annotations: 1 });

  } catch (error) {
    console.log("Error in inserting questions data into database: " + error.stack);
  } finally {
    await client.close();
  }
}

// Wrapper function to invoke the data load function above.
insertQuestionsToDb().then(result => {
  console.log("Inserting questions data to database completed!");
}).catch(error => console.log(error));