import { useState, useCallback } from "react";
import { 
  query, 
  collection, 
  getDocs, 
  limit, 
  startAfter, 
  QueryConstraint,
  DocumentData,
  QueryDocumentSnapshot,
  orderBy
} from "firebase/firestore";
import { db } from "../firebase/config";

export function usePagination<T = DocumentData>(collectionName: string, queryConstraints: QueryConstraint[] = [], pageSize: number = 10) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  const loadInitial = useCallback(async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, collectionName),
        ...queryConstraints,
        limit(pageSize)
      );
      const snapshot = await getDocs(q);
      
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
      setData(docs);
      
      if (snapshot.docs.length < pageSize) {
        setHasMore(false);
      } else {
        setHasMore(true);
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      }
    } catch (error) {
      console.error("Error loading initial data:", error);
    } finally {
      setLoading(false);
    }
  }, [collectionName, pageSize, queryConstraints]);

  const loadMore = useCallback(async () => {
    if (!hasMore || loading || !lastDoc) return;
    
    setLoading(true);
    try {
      const q = query(
        collection(db, collectionName),
        ...queryConstraints,
        startAfter(lastDoc),
        limit(pageSize)
      );
      
      const snapshot = await getDocs(q);
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
      
      setData(prev => [...prev, ...docs]);
      
      if (snapshot.docs.length < pageSize) {
        setHasMore(false);
      } else {
        setHasMore(true);
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      }
    } catch (error) {
      console.error("Error loading more data:", error);
    } finally {
      setLoading(false);
    }
  }, [collectionName, pageSize, queryConstraints, hasMore, loading, lastDoc]);

  return {
    data,
    loading,
    hasMore,
    loadInitial,
    loadMore,
  };
}
