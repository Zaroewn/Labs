        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
        import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc,deleteDoc, query, where} 
        from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js'
            
           
              
        const firebaseConfig = {
          apiKey: "AIzaSyACdB1wyOzGq6GqAkNAoOU9qFWsbtUF5y0",
          authDomain: "maxime-lamotte.firebaseapp.com",
          projectId: "maxime-lamotte",
          storageBucket: "maxime-lamotte.appspot.com",
          messagingSenderId: "858405143374",
          appId: "1:858405143374:web:3a4e8144fc4eaa2388941f"
        };
              
                // Initialize Firebase
                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app)
                  
         
      
        const ajouterUnObjet = async(obj,dataBase) => {
      
      
                try {
                    const docRef = await addDoc(collection(db, dataBase), obj)
                   
                    console.log(`Le document a bien été ajouté la base de donnée : ${dataBase}` , docRef.id);
                    obj.id = docRef.id;
                    return obj
                 
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }
      
            
      
        }
        //!!!!!   PROMESSE !!!  obtenir la collection :  let maCollection = await obtenirTouteLaCollection("base-de-donnée")
        const obtenirTouteLaCollection = async(dataBase) => {
        try {
      
          const _collection = collection(db, dataBase);
          const querySnapshot = await getDocs(_collection);
      
      
            const tableau = await querySnapshot.docs.map((doc) => {
              const data = doc.data();
              data.id = doc.id
        return data
            })
        return tableau
           
          } catch (error) {
           
            console.error("An error occurred:", error);
      
          }
      
      
        }
      
        const mettreAJourUnDocument = async (dataBase, id, obj) => {
          const docRef = doc(db, dataBase, id);
      
          try {
            await updateDoc(docRef, obj);
            console.log("Le document a bien été modifié");
          } catch (error) {
            console.log(error);
          }
        };
      
      
        const supprimerUnDocument = async (dataBase, id) => {
          const docRef = doc(db, dataBase, id);
      
          try {
            await deleteDoc(docRef);
            console.log("Le document a bien été supprimé");
          } catch (error) {
            console.log(error);
          }
        };
      
        const supprimerTousLesDocumentsDeLaCollection = async ( collectionName) => {
          const collectionRef = collection(db, collectionName);
      
          try {
            const querySnapshot = await getDocs(collectionRef);
      
            querySnapshot.forEach(async (doc) => {
            
              await deleteDoc(doc.ref);
            });
      
            console.log("Tous les documents de la collection ont été supprimés.");
          } catch (error) {
            console.log("Une erreur s'est produite : ", error);
          }
        };
      
        const trouverDocumentsAvecValeur = async ( collectionName, fieldName, targetValue) => {
          const collectionRef = collection(db, collectionName);
      
          try {
            const querySnapshot = await getDocs(query(collectionRef, where(fieldName, '==', targetValue)));
      
            querySnapshot.forEach((doc) => {
              console.log('Document ID: ', doc.id);
              console.log('Document data: ', doc.data());
            });
          } catch (error) {
            console.log("Une erreur s'est produite : ", error);
          }
        };
      
        const mettreAJourDocumentsAvecValeurParticulière = async (collectionName, updateObject, propriété, valeur) => {
          const collectionRef = collection(db, collectionName);
      
          try {
            const querySnapshot = await getDocs(collectionRef);
      
            querySnapshot.forEach(async (document) => {
              const data = document.data();
              if (data && data[propriété] === valeur) {
                const docRef = doc(db, `${collectionName}/${document.id}`); // Corrected line
                await updateDoc(docRef, updateObject);
                console.log('Document ID:', document.id, 'has been updated with', updateObject);
              }
            });
          } catch (error) {
            console.log("Une erreur s'est produite : ", error);
          }
        };
      
      
      
      
      
        export {
          ajouterUnObjet,
          obtenirTouteLaCollection,
          trouverDocumentsAvecValeur,
          mettreAJourUnDocument,
          supprimerUnDocument,
          supprimerTousLesDocumentsDeLaCollection,
          mettreAJourDocumentsAvecValeurParticulière
        }