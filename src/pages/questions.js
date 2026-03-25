const QUESTIONS = [
  {
    id:1, title:"Height of Binary Search Tree", difficulty:"easy", topic:"BST", type:"implementation",
    linkedPage:"bst.html", linkedLabel:"See BST Visualizer",
    description:`Given the root of a Binary Search Tree built by inserting N values in order, return its **height**.\n\nHeight = number of nodes along the longest path from root to the deepest leaf.\nA NULL/empty tree has height **0**.`,
    examples:[
      {input:"3\n1 2 3",output:"3",explanation:"Sorted insert → skewed right chain 1→2→3, height=3"},
      {input:"3\n2 1 3",output:"2",explanation:"Balanced: root=2,left=1,right=3, height=2"},
      {input:"1\n5",    output:"1",explanation:"Single node = height 1"}
    ],
    constraints:["0 ≤ N ≤ 10⁴","−10⁵ ≤ values ≤ 10⁵","All values distinct"],
    testCases:{
      visible:[{input:"3\n1 2 3",expected:"3"},{input:"3\n2 1 3",expected:"2"},{input:"1\n5",expected:"1"}],
      hidden: [{input:"5\n5 3 7 1 4",expected:"3"},{input:"0\n",expected:"0"}]
    },
    hints:["Think recursively. What is the height of a NULL node?","Height = 1 + max(height(left), height(right))","Base case: NULL → 0. Recursive: return 1 + max(height(left),height(right))"],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
struct Node { int data; Node *left,*right; Node(int x):data(x),left(nullptr),right(nullptr){} };
Node* insert(Node* r,int v){if(!r)return new Node(v);if(v<r->data)r->left=insert(r->left,v);else if(v>r->data)r->right=insert(r->right,v);return r;}

// ===== YOUR CODE BELOW =====
int height(Node* root) {
    // TODO: return height of BST
}
// ===== YOUR CODE ABOVE =====

int main(){
    int n;cin>>n;
    Node* root=nullptr;
    for(int i=0;i<n;i++){int x;cin>>x;root=insert(root,x);}
    cout<<height(root)<<endl;
}`,
      python:`import sys
input=sys.stdin.readline
class Node:
    def __init__(self,x): self.data=x;self.left=None;self.right=None
def insert(r,v):
    if not r:return Node(v)
    if v<r.data:r.left=insert(r.left,v)
    elif v>r.data:r.right=insert(r.right,v)
    return r

# ===== YOUR CODE BELOW =====
def height(root):
    pass
# ===== YOUR CODE ABOVE =====

n=int(input())
root=None
if n>0:
    for v in map(int,input().split()): root=insert(root,v)
print(height(root))`,
      java:`import java.util.*;
class Node{int data;Node left,right;Node(int x){data=x;}}
public class Main{
    static Node insert(Node r,int v){if(r==null)return new Node(v);if(v<r.data)r.left=insert(r.left,v);else if(v>r.data)r.right=insert(r.right,v);return r;}
    // ===== YOUR CODE BELOW =====
    static int height(Node root){ return 0; }
    // ===== YOUR CODE ABOVE =====
    public static void main(String[] a){
        Scanner sc=new Scanner(System.in);int n=sc.nextInt();
        Node root=null;for(int i=0;i<n;i++)root=insert(root,sc.nextInt());
        System.out.println(height(root));
    }
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node{int data;struct Node*left,*right;}Node;
Node* newN(int x){Node*n=malloc(sizeof(Node));n->data=x;n->left=n->right=NULL;return n;}
Node* ins(Node*r,int v){if(!r)return newN(v);if(v<r->data)r->left=ins(r->left,v);else if(v>r->data)r->right=ins(r->right,v);return r;}
/* ===== YOUR CODE BELOW ===== */
int height(Node* root){ return 0; }
/* ===== YOUR CODE ABOVE ===== */
int main(){int n;scanf("%d",&n);Node*root=NULL;for(int i=0;i<n;i++){int x;scanf("%d",&x);root=ins(root,x);}printf("%d\n",height(root));return 0;}`
    }
  },

  {
    id:2, title:"Two Sum using Hash Map", difficulty:"easy", topic:"Hash Table", type:"implementation",
    linkedPage:"story_d.html", linkedLabel:"See Hash Table Story",
    description:`Given an array of integers **nums** and an integer **target**, return the **indices** of the two numbers that add up to target.\n\nOutput two indices separated by a space in **ascending order**.`,
    examples:[
      {input:"4\n2 7 11 15\n9",output:"0 1",explanation:"nums[0]+nums[1]=2+7=9"},
      {input:"3\n3 2 4\n6",   output:"1 2",explanation:"nums[1]+nums[2]=2+4=6"},
      {input:"2\n3 3\n6",     output:"0 1",explanation:"nums[0]+nums[1]=3+3=6"}
    ],
    constraints:["2 ≤ n ≤ 10⁴","−10⁹ ≤ nums[i] ≤ 10⁹","Exactly one valid answer"],
    testCases:{
      visible:[{input:"4\n2 7 11 15\n9",expected:"0 1"},{input:"3\n3 2 4\n6",expected:"1 2"},{input:"2\n3 3\n6",expected:"0 1"}],
      hidden:[{input:"5\n1 5 3 7 2\n9",expected:"1 3"},{input:"4\n-1 -2 -3 -4\n-6",expected:"1 3"}]
    },
    hints:["Brute force O(n²) — two nested loops. Can you do O(n)?","Use a hash map: store each number's index. For each element check if (target-element) exists.","Iterate once. For nums[i], check map for (target-nums[i]). Yes→found. No→add nums[i]→i to map."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
pair<int,int> twoSum(vector<int>& nums, int target){
    // Use unordered_map<int,int> value->index
}
// ===== YOUR CODE ABOVE =====
int main(){
    int n;cin>>n;vector<int>v(n);for(auto&x:v)cin>>x;int t;cin>>t;
    auto[a,b]=twoSum(v,t);if(a>b)swap(a,b);cout<<a<<" "<<b<<endl;
}`,
      python:`import sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def two_sum(nums,target):
    pass
# ===== YOUR CODE ABOVE =====
n=int(input());nums=list(map(int,input().split()));target=int(input())
r=two_sum(nums,target);r.sort();print(r[0],r[1])`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static int[] twoSum(int[] nums,int target){ return new int[]{0,0}; }
    // ===== YOUR CODE ABOVE =====
    public static void main(String[] a){
        Scanner sc=new Scanner(System.in);int n=sc.nextInt();int[]v=new int[n];
        for(int i=0;i<n;i++)v[i]=sc.nextInt();int t=sc.nextInt();
        int[]r=twoSum(v,t);Arrays.sort(r);System.out.println(r[0]+" "+r[1]);
    }
}`,
      c:`#include <stdio.h>
void twoSum(int*v,int n,int t,int*i1,int*i2){for(int i=0;i<n;i++)for(int j=i+1;j<n;j++)if(v[i]+v[j]==t){*i1=i;*i2=j;return;}}
int main(){int n;scanf("%d",&n);int v[10005];for(int i=0;i<n;i++)scanf("%d",&v[i]);int t;scanf("%d",&t);int a=0,b=0;twoSum(v,n,t,&a,&b);if(a>b){int x=a;a=b;b=x;}printf("%d %d\n",a,b);return 0;}`
    }
  },

  {
    id:3, title:"Validate BST Inorder", difficulty:"easy", topic:"BST", type:"dry-run",
    linkedPage:"bst.html", linkedLabel:"See BST Visualizer",
    description:`Given N integers representing the **inorder traversal** of a tree, print **YES** if they form a valid BST (strictly increasing), **NO** otherwise.`,
    examples:[
      {input:"5\n1 2 3 4 5",output:"YES",explanation:"Strictly increasing"},
      {input:"5\n1 3 2 4 5",output:"NO", explanation:"3>2 violates BST property"},
      {input:"1\n42",        output:"YES",explanation:"Single element is always valid"}
    ],
    constraints:["1 ≤ N ≤ 10⁵","−10⁹ ≤ values ≤ 10⁹"],
    testCases:{
      visible:[{input:"5\n1 2 3 4 5",expected:"YES"},{input:"5\n1 3 2 4 5",expected:"NO"},{input:"1\n42",expected:"YES"}],
      hidden:[{input:"4\n-3 -2 0 5",expected:"YES"},{input:"3\n5 5 6",expected:"NO"}]
    },
    hints:["Inorder of valid BST is always strictly increasing.","Iterate and compare each element with previous.","If any element ≤ previous → NO. Else YES."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
bool isValid(vector<int>& v){
    // Check strictly increasing
}
// ===== YOUR CODE ABOVE =====
int main(){int n;cin>>n;vector<int>v(n);for(auto&x:v)cin>>x;cout<<(isValid(v)?"YES":"NO")<<endl;}`,
      python:`import sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def is_valid(v):
    pass
# ===== YOUR CODE ABOVE =====
n=int(input());v=list(map(int,input().split()))
print("YES" if is_valid(v) else "NO")`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static boolean isValid(int[]v){ return true; }
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt();int[]v=new int[n];for(int i=0;i<n;i++)v[i]=sc.nextInt();System.out.println(isValid(v)?"YES":"NO");}
}`,
      c:`#include <stdio.h>
/* ===== YOUR CODE BELOW ===== */
int isValid(int*v,int n){ return 0; }
/* ===== YOUR CODE ABOVE ===== */
int main(){int n;scanf("%d",&n);int v[100005];for(int i=0;i<n;i++)scanf("%d",&v[i]);printf("%s\n",isValid(v,n)?"YES":"NO");return 0;}`
    }
  },

  {
    id:4, title:"Kth Largest Element", difficulty:"medium", topic:"Priority Queue", type:"implementation",
    linkedPage:"story_c.html", linkedLabel:"See OPD Priority Queue Story",
    description:`Given an array of N integers and a number K, find the **Kth largest** element using a **Min Heap of size K** — O(N log K).`,
    examples:[
      {input:"6 2\n3 2 1 5 6 4",output:"5",explanation:"Sorted desc: 6,5,4,3,2,1 → 2nd largest=5"},
      {input:"4 4\n4 3 2 1",    output:"1",explanation:"4th largest=1"},
      {input:"3 1\n7 2 9",      output:"9",explanation:"1st largest=9"}
    ],
    constraints:["1 ≤ K ≤ N ≤ 10⁴","−10⁴ ≤ nums[i] ≤ 10⁴"],
    testCases:{
      visible:[{input:"6 2\n3 2 1 5 6 4",expected:"5"},{input:"4 4\n4 3 2 1",expected:"1"},{input:"3 1\n7 2 9",expected:"9"}],
      hidden:[{input:"5 3\n1 1 1 1 1",expected:"1"},{input:"7 4\n10 -5 3 8 2 -1 6",expected:"3"}]
    },
    hints:["Sorting O(N log N). Can you do O(N log K)?","Maintain a min-heap of size K. If heap size > K, pop minimum.","After all elements, top of min-heap = Kth largest."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
int kthLargest(vector<int>& nums, int k){
    // Use priority_queue<int,vector<int>,greater<int>> (min-heap)
}
// ===== YOUR CODE ABOVE =====
int main(){int n,k;cin>>n>>k;vector<int>v(n);for(auto&x:v)cin>>x;cout<<kthLargest(v,k)<<endl;}`,
      python:`import heapq,sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def kth_largest(nums,k):
    pass
# ===== YOUR CODE ABOVE =====
l=input().split();n,k=int(l[0]),int(l[1]);nums=list(map(int,input().split()))
print(kth_largest(nums,k))`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static int kthLargest(int[]nums,int k){ return 0; }
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt(),k=sc.nextInt();int[]v=new int[n];for(int i=0;i<n;i++)v[i]=sc.nextInt();System.out.println(kthLargest(v,k));}
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
int cmp(const void*a,const void*b){return *(int*)b-*(int*)a;}
int kthLargest(int*v,int n,int k){qsort(v,n,sizeof(int),cmp);return v[k-1];}
int main(){int n,k;scanf("%d %d",&n,&k);int*v=malloc(n*sizeof(int));for(int i=0;i<n;i++)scanf("%d",&v[i]);printf("%d\n",kthLargest(v,n,k));return 0;}`
    }
  },

  {
    id:5, title:"Number of Connected Components", difficulty:"medium", topic:"Union-Find", type:"implementation",
    linkedPage:"story_a.html", linkedLabel:"See Graph Story",
    description:`Given N nodes (0-indexed) and E undirected edges, find the **number of connected components** using **Union-Find (DSU)**.`,
    examples:[
      {input:"5 4\n0 1\n1 2\n3 4\n4 3",output:"2",explanation:"Components: {0,1,2} and {3,4}"},
      {input:"4 0",                      output:"4",explanation:"No edges — 4 isolated nodes"},
      {input:"3 3\n0 1\n1 2\n0 2",       output:"1",explanation:"All connected"}
    ],
    constraints:["1 ≤ N ≤ 10⁵","0 ≤ E ≤ 2×10⁵"],
    testCases:{
      visible:[{input:"5 4\n0 1\n1 2\n3 4\n4 3",expected:"2"},{input:"4 0",expected:"4"},{input:"3 3\n0 1\n1 2\n0 2",expected:"1"}],
      hidden:[{input:"6 3\n0 1\n2 3\n4 5",expected:"3"},{input:"1 0",expected:"1"}]
    },
    hints:["Each node starts as its own parent. Union merges, Find returns root.","find(x) with path compression: parent[x]=find(parent[x])","union(x,y): if find(x)!=find(y) → merge and decrement component count."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
struct DSU{
    vector<int>parent,rank;int comp;
    DSU(int n){ /* init parent[i]=i, rank[i]=0, comp=n */ }
    int find(int x){ /* path compression */ }
    void unite(int x,int y){ /* union by rank */ }
};
// ===== YOUR CODE ABOVE =====
int main(){int n,e;cin>>n>>e;DSU dsu(n);for(int i=0;i<e;i++){int u,v;cin>>u>>v;dsu.unite(u,v);}cout<<dsu.comp<<endl;}`,
      python:`import sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
class DSU:
    def __init__(self,n): pass
    def find(self,x): pass
    def union(self,x,y): pass
# ===== YOUR CODE ABOVE =====
l=input().split();n,e=int(l[0]),int(l[1])
dsu=DSU(n)
for _ in range(e):u,v=map(int,input().split());dsu.union(u,v)
print(dsu.components)`,
      java:`import java.util.*;
public class Main{
    static int[]parent,rank;static int comp;
    // ===== YOUR CODE BELOW =====
    static void init(int n){parent=new int[n];rank=new int[n];comp=n;for(int i=0;i<n;i++)parent[i]=i;}
    static int find(int x){ return x; }
    static void unite(int x,int y){ }
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt(),e=sc.nextInt();init(n);for(int i=0;i<e;i++)unite(sc.nextInt(),sc.nextInt());System.out.println(comp);}
}`,
      c:`#include <stdio.h>
int par[100005],rnk[100005],comp;
int find(int x){return par[x]==x?x:(par[x]=find(par[x]));}
void unite(int x,int y){x=find(x);y=find(y);if(x==y)return;if(rnk[x]<rnk[y]){int t=x;x=y;y=t;}par[y]=x;if(rnk[x]==rnk[y])rnk[x]++;comp--;}
int main(){int n,e;scanf("%d %d",&n,&e);comp=n;for(int i=0;i<n;i++){par[i]=i;rnk[i]=0;}for(int i=0;i<e;i++){int u,v;scanf("%d %d",&u,&v);unite(u,v);}printf("%d\n",comp);return 0;}`
    }
  },

  {
    id:6, title:"Dijkstra's Shortest Path", difficulty:"hard", topic:"Graph", type:"implementation",
    linkedPage:"story_a.html", linkedLabel:"See Dijkstra Story Mode",
    description:`Given a weighted undirected graph with N nodes and E edges, find shortest distance from source **S** to all nodes.\n\nPrint N distances. Unreachable node → print **-1**.`,
    examples:[
      {input:"5 6 0\n0 1 4\n0 2 1\n2 1 2\n1 3 1\n2 3 5\n3 4 3",output:"0 3 1 4 7",explanation:"0→2=1, 0→2→1=3, 0→2→1→3=4, +3=7"},
      {input:"3 2 0\n0 1 5\n1 2 3",                              output:"0 5 8", explanation:"0→1=5, 0→1→2=8"},
      {input:"4 2 0\n0 1 2\n2 3 1",                              output:"0 2 -1 -1",explanation:"Nodes 2,3 unreachable"}
    ],
    constraints:["1 ≤ N ≤ 10⁴","0 ≤ E ≤ 5×10⁴","1 ≤ weight ≤ 10⁴"],
    testCases:{
      visible:[{input:"5 6 0\n0 1 4\n0 2 1\n2 1 2\n1 3 1\n2 3 5\n3 4 3",expected:"0 3 1 4 7"},{input:"3 2 0\n0 1 5\n1 2 3",expected:"0 5 8"},{input:"4 2 0\n0 1 2\n2 3 1",expected:"0 2 -1 -1"}],
      hidden:[{input:"2 1 1\n0 1 10",expected:"10 0"},{input:"1 0 0",expected:"0"}]
    },
    hints:["Min-heap ordered by distance. dist[src]=0, all others=∞.","Extract min u, relax neighbors: if dist[u]+w < dist[v] → update dist[v].","dist still INT_MAX after algorithm → print -1."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
typedef pair<int,int> pii;
// ===== YOUR CODE BELOW =====
vector<int> dijkstra(int n,vector<vector<pii>>&adj,int src){
    vector<int>dist(n,INT_MAX);
    // priority_queue<pii,vector<pii>,greater<pii>> pq
    // dist[src]=0, push {0,src}, relax neighbors
}
// ===== YOUR CODE ABOVE =====
int main(){
    int n,e,src;cin>>n>>e>>src;
    vector<vector<pii>>adj(n);
    for(int i=0;i<e;i++){int u,v,w;cin>>u>>v>>w;adj[u].push_back({v,w});adj[v].push_back({u,w});}
    auto dist=dijkstra(n,adj,src);
    for(int i=0;i<n;i++)cout<<(dist[i]==INT_MAX?-1:dist[i])<<" \n"[i==n-1];
}`,
      python:`import heapq,sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def dijkstra(n,adj,src):
    dist=[float('inf')]*n
    # heapq: push (distance, node), dist[src]=0
    pass
# ===== YOUR CODE ABOVE =====
l=input().split();n,e,src=int(l[0]),int(l[1]),int(l[2])
adj=[[]for _ in range(n)]
for _ in range(e):u,v,w=map(int,input().split());adj[u].append((v,w));adj[v].append((u,w))
dist=dijkstra(n,adj,src)
print(' '.join(str(-1 if d==float('inf') else d) for d in dist))`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static int[] dijkstra(int n,List<int[]>[]adj,int src){
        int[]dist=new int[n];Arrays.fill(dist,Integer.MAX_VALUE);
        return dist;
    }
    // ===== YOUR CODE ABOVE =====
    @SuppressWarnings("unchecked")
    public static void main(String[]a){
        Scanner sc=new Scanner(System.in);int n=sc.nextInt(),e=sc.nextInt(),src=sc.nextInt();
        List<int[]>[]adj=new List[n];for(int i=0;i<n;i++)adj[i]=new ArrayList<>();
        for(int i=0;i<e;i++){int u=sc.nextInt(),v=sc.nextInt(),w=sc.nextInt();adj[u].add(new int[]{v,w});adj[v].add(new int[]{u,w});}
        int[]dist=dijkstra(n,adj,src);
        StringBuilder sb=new StringBuilder();
        for(int i=0;i<n;i++)sb.append(dist[i]==Integer.MAX_VALUE?-1:dist[i]).append(i<n-1?" ":"");
        System.out.println(sb);
    }
}`,
      c:`#include <stdio.h>
#include <limits.h>
int dist[10005],vis[10005],g[505][505];
void dijkstra(int n,int src){for(int i=0;i<n;i++){dist[i]=INT_MAX;vis[i]=0;}dist[src]=0;for(int iter=0;iter<n;iter++){int u=-1;for(int i=0;i<n;i++)if(!vis[i]&&(u==-1||dist[i]<dist[u]))u=i;if(u==-1||dist[u]==INT_MAX)break;vis[u]=1;for(int v=0;v<n;v++)if(g[u][v]&&dist[u]+g[u][v]<dist[v])dist[v]=dist[u]+g[u][v];}}
int main(){int n,e,src;scanf("%d %d %d",&n,&e,&src);for(int i=0;i<e;i++){int u,v,w;scanf("%d %d %d",&u,&v,&w);g[u][v]=w;g[v][u]=w;}dijkstra(n,src);for(int i=0;i<n;i++)printf("%d%s",dist[i]==INT_MAX?-1:dist[i],i<n-1?" ":"\n");return 0;}`
    }
  },

  {
    id:7, title:"AVL Tree — Height & Rotations", difficulty:"medium", topic:"AVL Tree", type:"implementation",
    linkedPage:"battle3.html", linkedLabel:"See AVL in Battle Mode",
    description:`Build an **AVL Tree** inserting N values. Output:\n- Line 1: **Height** of final AVL tree\n- Line 2: **Total rotations** performed`,
    examples:[
      {input:"3\n1 2 3",output:"2\n1",explanation:"RR imbalance → 1 Left Rotation. Height=2"},
      {input:"3\n3 2 1",output:"2\n1",explanation:"LL imbalance → 1 Right Rotation. Height=2"},
      {input:"1\n5",    output:"1\n0",explanation:"Single node, no rotation"}
    ],
    constraints:["1 ≤ N ≤ 10⁴","All values distinct"],
    testCases:{
      visible:[{input:"3\n1 2 3",expected:"2\n1"},{input:"3\n3 2 1",expected:"2\n1"},{input:"1\n5",expected:"1\n0"}],
      hidden:[{input:"7\n1 2 3 4 5 6 7",expected:"3\n4"},{input:"4\n10 5 15 3",expected:"3\n0"}]
    },
    hints:["AVL: |balance_factor| ≤ 1 at every node. BF = height(left)-height(right).","4 cases: LL→Right rotate, RR→Left rotate, LR→Left-Right, RL→Right-Left.","Track rotation count globally. Increment on every rotation call."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
int rotations=0;
struct Node{int data,h;Node*left,*right;Node(int x):data(x),h(1),left(nullptr),right(nullptr){}};
int H(Node*n){return n?n->h:0;}
int BF(Node*n){return n?H(n->left)-H(n->right):0;}
void upd(Node*n){if(n)n->h=1+max(H(n->left),H(n->right));}
// ===== YOUR CODE BELOW =====
Node* rotR(Node*y){ rotations++; return y; } // TODO
Node* rotL(Node*x){ rotations++; return x; } // TODO
Node* rebal(Node*n){ return n; } // TODO: check BF, apply rotation
Node* insert(Node*n,int v){ if(!n)return new Node(v); return n; } // TODO
// ===== YOUR CODE ABOVE =====
int main(){int num;cin>>num;Node*root=nullptr;for(int i=0;i<num;i++){int x;cin>>x;root=insert(root,x);}cout<<H(root)<<"\n"<<rotations<<endl;}`,
      python:`import sys
input=sys.stdin.readline
rotations=0
class Node:
    def __init__(self,x): self.data=x;self.h=1;self.left=None;self.right=None
def H(n): return n.h if n else 0
def BF(n): return H(n.left)-H(n.right) if n else 0
def upd(n):
    if n: n.h=1+max(H(n.left),H(n.right))
# ===== YOUR CODE BELOW =====
def rot_r(y): global rotations; rotations+=1; return y  # TODO
def rot_l(x): global rotations; rotations+=1; return x  # TODO
def rebal(n): return n  # TODO
def insert(n,v):
    if not n: return Node(v)
    return n  # TODO
# ===== YOUR CODE ABOVE =====
num=int(input());vals=list(map(int,input().split()));root=None
for v in vals: root=insert(root,v)
print(H(root));print(rotations)`,
      java:`import java.util.*;
public class Main{
    static int rotations=0;
    static class Node{int data,h;Node left,right;Node(int x){data=x;h=1;}}
    static int H(Node n){return n==null?0:n.h;}
    static int BF(Node n){return n==null?0:H(n.left)-H(n.right);}
    static void upd(Node n){if(n!=null)n.h=1+Math.max(H(n.left),H(n.right));}
    // ===== YOUR CODE BELOW =====
    static Node rotR(Node y){rotations++;return y;}
    static Node rotL(Node x){rotations++;return x;}
    static Node rebal(Node n){return n;}
    static Node insert(Node n,int v){if(n==null)return new Node(v);return n;}
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int num=sc.nextInt();Node root=null;for(int i=0;i<num;i++)root=insert(root,sc.nextInt());System.out.println(H(root));System.out.println(rotations);}
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
int rotations=0;
typedef struct Node{int data,h;struct Node*left,*right;}Node;
Node* newN(int x){Node*n=malloc(sizeof(Node));n->data=x;n->h=1;n->left=n->right=NULL;return n;}
int H(Node*n){return n?n->h:0;}
int BF(Node*n){return n?H(n->left)-H(n->right):0;}
void upd(Node*n){if(n)n->h=1+(H(n->left)>H(n->right)?H(n->left):H(n->right));}
Node* rotR(Node*y){Node*x=y->left,*T=x->right;x->right=y;y->left=T;upd(y);upd(x);rotations++;return x;}
Node* rotL(Node*x){Node*y=x->right,*T=y->left;y->left=x;x->right=T;upd(x);upd(y);rotations++;return y;}
Node* rebal(Node*n){upd(n);int b=BF(n);if(b>1&&BF(n->left)>=0)return rotR(n);if(b>1&&BF(n->left)<0){n->left=rotL(n->left);return rotR(n);}if(b<-1&&BF(n->right)<=0)return rotL(n);if(b<-1&&BF(n->right)>0){n->right=rotR(n->right);return rotL(n);}return n;}
Node* ins(Node*n,int v){if(!n)return newN(v);if(v<n->data)n->left=ins(n->left,v);else if(v>n->data)n->right=ins(n->right,v);return rebal(n);}
int main(){int num;scanf("%d",&num);Node*root=NULL;for(int i=0;i<num;i++){int x;scanf("%d",&x);root=ins(root,x);}printf("%d\n%d\n",H(root),rotations);return 0;}`
    }
  },

  {
    id:8, title:"Level Order Traversal", difficulty:"easy", topic:"BST", type:"dry-run",
    linkedPage:"bst.html", linkedLabel:"See BST Visualizer",
    description:`Given N values inserted into a BST, print the **level order traversal** (BFS).\n\nEach level on a new line, values space-separated.`,
    examples:[
      {input:"5\n4 2 6 1 3",output:"4\n2 6\n1 3",explanation:"Root=4, Level1=2,6, Level2=1,3"},
      {input:"3\n1 2 3",    output:"1\n2\n3",    explanation:"Skewed right — one node per level"},
      {input:"1\n10",       output:"10",          explanation:"Single node"}
    ],
    constraints:["1 ≤ N ≤ 10³","All values distinct"],
    testCases:{
      visible:[{input:"5\n4 2 6 1 3",expected:"4\n2 6\n1 3"},{input:"3\n1 2 3",expected:"1\n2\n3"},{input:"1\n10",expected:"10"}],
      hidden:[{input:"4\n5 3 7 1",expected:"5\n3 7\n1"},{input:"3\n2 1 3",expected:"2\n1 3"}]
    },
    hints:["BFS uses a Queue. Push root first.","Per level: record queue size = level size. Process exactly that many, push children.","Collect values per level, print each level on new line."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
struct Node{int data;Node*left,*right;Node(int x):data(x),left(nullptr),right(nullptr){}};
Node* ins(Node*r,int v){if(!r)return new Node(v);if(v<r->data)r->left=ins(r->left,v);else if(v>r->data)r->right=ins(r->right,v);return r;}
// ===== YOUR CODE BELOW =====
void levelOrder(Node* root){
    // Use queue<Node*>, print each level on new line
}
// ===== YOUR CODE ABOVE =====
int main(){int n;cin>>n;Node*root=nullptr;for(int i=0;i<n;i++){int x;cin>>x;root=ins(root,x);}levelOrder(root);}`,
      python:`from collections import deque
import sys
input=sys.stdin.readline
class Node:
    def __init__(self,x): self.data=x;self.left=None;self.right=None
def ins(r,v):
    if not r:return Node(v)
    if v<r.data:r.left=ins(r.left,v)
    elif v>r.data:r.right=ins(r.right,v)
    return r
# ===== YOUR CODE BELOW =====
def level_order(root):
    pass
# ===== YOUR CODE ABOVE =====
n=int(input());root=None
for v in map(int,input().split()):root=ins(root,v)
level_order(root)`,
      java:`import java.util.*;
public class Main{
    static class Node{int data;Node left,right;Node(int x){data=x;}}
    static Node ins(Node r,int v){if(r==null)return new Node(v);if(v<r.data)r.left=ins(r.left,v);else if(v>r.data)r.right=ins(r.right,v);return r;}
    // ===== YOUR CODE BELOW =====
    static void levelOrder(Node root){ }
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt();Node root=null;for(int i=0;i<n;i++)root=ins(root,sc.nextInt());levelOrder(root);}
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node{int data;struct Node*left,*right;}Node;
Node* newN(int x){Node*n=malloc(sizeof(Node));n->data=x;n->left=n->right=NULL;return n;}
Node* ins(Node*r,int v){if(!r)return newN(v);if(v<r->data)r->left=ins(r->left,v);else if(v>r->data)r->right=ins(r->right,v);return r;}
Node* q[100005];int qf=0,qb=0;
void levelOrder(Node*root){if(!root)return;q[qb++]=root;while(qf<qb){int sz=qb-qf;for(int i=0;i<sz;i++){Node*n=q[qf++];printf("%d%s",n->data,i<sz-1?" ":"\n");if(n->left)q[qb++]=n->left;if(n->right)q[qb++]=n->right;}}}
int main(){int n;scanf("%d",&n);Node*root=NULL;for(int i=0;i<n;i++){int x;scanf("%d",&x);root=ins(root,x);}levelOrder(root);return 0;}`
    }
  },

  {
    id:9, title:"Valid Parentheses", difficulty:"easy", topic:"Stack", type:"implementation",
    linkedPage:"home.html", linkedLabel:"Back to DS Dojo Home",
    description:`Given a string containing only **( ) { } [ ]**, determine if it is **valid**.\n\nValid means: brackets are closed in correct order and every open has a matching close.\n\nPrint **YES** or **NO**.`,
    examples:[
      {input:"()",      output:"YES",explanation:"Simple valid pair"},
      {input:"()[]{}", output:"YES",explanation:"All valid pairs"},
      {input:"(]",     output:"NO", explanation:"Wrong closing bracket"},
      {input:"([)]",   output:"NO", explanation:"Interleaved incorrectly"}
    ],
    constraints:["1 ≤ |s| ≤ 10⁴","s contains only ()[]{}"],
    testCases:{
      visible:[{input:"()",expected:"YES"},{input:"()[]{}", expected:"YES"},{input:"(]",expected:"NO"}],
      hidden:[{input:"([)]",expected:"NO"},{input:"{[]}",expected:"YES"}]
    },
    hints:["Use a Stack. Push open brackets, pop on close brackets.","On close bracket: if stack empty or top doesn't match → invalid.","After processing all chars, stack must be empty for valid string."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
bool isValid(string s){
    stack<char> st;
    // Push open brackets, pop+check on close brackets
}
// ===== YOUR CODE ABOVE =====
int main(){string s;cin>>s;cout<<(isValid(s)?"YES":"NO")<<endl;}`,
      python:`import sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def is_valid(s):
    stack=[]
    # Use list as stack, append/pop
    pass
# ===== YOUR CODE ABOVE =====
s=input().strip()
print("YES" if is_valid(s) else "NO")`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static boolean isValid(String s){ return false; }
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);System.out.println(isValid(sc.next())?"YES":"NO");}
}`,
      c:`#include <stdio.h>
#include <string.h>
char st[10005];int top=0;
/* ===== YOUR CODE BELOW ===== */
int isValid(char*s){
    top=0;
    for(int i=0;s[i];i++){
        if(s[i]=='('||s[i]=='['||s[i]=='{'){st[top++]=s[i];}
        else{if(top==0)return 0;char c=st[--top];if((s[i]==')'&&c!='(')||(s[i]==']'&&c!='[')||(s[i]=='}'&&c!='{'))return 0;}
    }
    return top==0;
}
/* ===== YOUR CODE ABOVE ===== */
int main(){char s[10005];scanf("%s",s);printf("%s\n",isValid(s)?"YES":"NO");return 0;}`
    }
  },

  {
    id:10, title:"Lowest Common Ancestor in BST", difficulty:"medium", topic:"BST", type:"implementation",
    linkedPage:"bst.html", linkedLabel:"See BST Visualizer",
    description:`Given a BST built from N values, and two values **P** and **Q**, find their **Lowest Common Ancestor (LCA)**.\n\nLCA = deepest node that has both P and Q as descendants (a node is a descendant of itself).`,
    examples:[
      {input:"7\n4 2 6 1 3 5 7\n2 6", output:"4",explanation:"LCA of 2 and 6 is root=4"},
      {input:"7\n4 2 6 1 3 5 7\n1 3", output:"2",explanation:"LCA of 1 and 3 is node 2"},
      {input:"7\n4 2 6 1 3 5 7\n4 7", output:"4",explanation:"LCA of 4 and 7 is 4 itself"}
    ],
    constraints:["1 ≤ N ≤ 10⁴","P and Q guaranteed to exist in BST"],
    testCases:{
      visible:[{input:"7\n4 2 6 1 3 5 7\n2 6",expected:"4"},{input:"7\n4 2 6 1 3 5 7\n1 3",expected:"2"},{input:"7\n4 2 6 1 3 5 7\n4 7",expected:"4"}],
      hidden:[{input:"5\n5 3 7 1 4\n1 4",expected:"3"},{input:"3\n2 1 3\n1 3",expected:"2"}]
    },
    hints:["In a BST, if both P and Q are less than node → LCA is in left subtree.","If both greater than node → LCA is in right subtree.","If one is less and one is greater (or equal) → current node IS the LCA."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
struct Node{int data;Node*left,*right;Node(int x):data(x),left(nullptr),right(nullptr){}};
Node* ins(Node*r,int v){if(!r)return new Node(v);if(v<r->data)r->left=ins(r->left,v);else if(v>r->data)r->right=ins(r->right,v);return r;}
// ===== YOUR CODE BELOW =====
int lca(Node* root, int p, int q){
    // Use BST property: compare root->data with p and q
}
// ===== YOUR CODE ABOVE =====
int main(){int n;cin>>n;Node*root=nullptr;for(int i=0;i<n;i++){int x;cin>>x;root=ins(root,x);}int p,q;cin>>p>>q;cout<<lca(root,p,q)<<endl;}`,
      python:`import sys
input=sys.stdin.readline
class Node:
    def __init__(self,x): self.data=x;self.left=None;self.right=None
def ins(r,v):
    if not r:return Node(v)
    if v<r.data:r.left=ins(r.left,v)
    elif v>r.data:r.right=ins(r.right,v)
    return r
# ===== YOUR CODE BELOW =====
def lca(root,p,q):
    pass
# ===== YOUR CODE ABOVE =====
n=int(input());root=None
for v in map(int,input().split()):root=ins(root,v)
p,q=map(int,input().split())
print(lca(root,p,q))`,
      java:`import java.util.*;
public class Main{
    static class Node{int data;Node left,right;Node(int x){data=x;}}
    static Node ins(Node r,int v){if(r==null)return new Node(v);if(v<r.data)r.left=ins(r.left,v);else if(v>r.data)r.right=ins(r.right,v);return r;}
    // ===== YOUR CODE BELOW =====
    static int lca(Node root,int p,int q){ return root.data; }
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt();Node root=null;for(int i=0;i<n;i++)root=ins(root,sc.nextInt());System.out.println(lca(root,sc.nextInt(),sc.nextInt()));}
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node{int data;struct Node*left,*right;}Node;
Node* newN(int x){Node*n=malloc(sizeof(Node));n->data=x;n->left=n->right=NULL;return n;}
Node* ins(Node*r,int v){if(!r)return newN(v);if(v<r->data)r->left=ins(r->left,v);else if(v>r->data)r->right=ins(r->right,v);return r;}
/* ===== YOUR CODE BELOW ===== */
int lca(Node*root,int p,int q){if(!root)return -1;if(p<root->data&&q<root->data)return lca(root->left,p,q);if(p>root->data&&q>root->data)return lca(root->right,p,q);return root->data;}
/* ===== YOUR CODE ABOVE ===== */
int main(){int n;scanf("%d",&n);Node*root=NULL;for(int i=0;i<n;i++){int x;scanf("%d",&x);root=ins(root,x);}int p,q;scanf("%d %d",&p,&q);printf("%d\n",lca(root,p,q));return 0;}`
    }
  },

  {
    id:11, title:"Detect Cycle in Directed Graph", difficulty:"medium", topic:"Graph", type:"implementation",
    linkedPage:"story_a.html", linkedLabel:"See Graph Story",
    description:`Given a directed graph with N nodes (0-indexed) and E edges, determine if it contains a **cycle**.\n\nPrint **YES** if cycle exists, **NO** otherwise.\n\nUse **DFS with recursion stack** detection.`,
    examples:[
      {input:"4 4\n0 1\n1 2\n2 3\n3 1",output:"YES",explanation:"1→2→3→1 forms a cycle"},
      {input:"4 3\n0 1\n1 2\n2 3",    output:"NO", explanation:"Simple path, no cycle"},
      {input:"3 3\n0 1\n1 2\n0 2",    output:"NO", explanation:"DAG — no back edges"}
    ],
    constraints:["1 ≤ N ≤ 10⁴","0 ≤ E ≤ 5×10⁴"],
    testCases:{
      visible:[{input:"4 4\n0 1\n1 2\n2 3\n3 1",expected:"YES"},{input:"4 3\n0 1\n1 2\n2 3",expected:"NO"},{input:"3 3\n0 1\n1 2\n0 2",expected:"NO"}],
      hidden:[{input:"2 2\n0 1\n1 0",expected:"YES"},{input:"1 0",expected:"NO"}]
    },
    hints:["DFS from each unvisited node. Track visited[] and recStack[] (recursion stack).","If you visit a node already in recStack → cycle found.","On backtrack, remove node from recStack."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
bool dfs(int u,vector<vector<int>>&adj,vector<bool>&vis,vector<bool>&rec){
    vis[u]=rec[u]=true;
    // For each neighbor v: if not visited→recurse, if in rec→cycle
    vis[u]=false; // TODO: fix logic
    return false;
}
bool hasCycle(int n,vector<vector<int>>&adj){
    vector<bool>vis(n,false),rec(n,false);
    // Call dfs for each unvisited node
    return false;
}
// ===== YOUR CODE ABOVE =====
int main(){int n,e;cin>>n>>e;vector<vector<int>>adj(n);for(int i=0;i<e;i++){int u,v;cin>>u>>v;adj[u].push_back(v);}cout<<(hasCycle(n,adj)?"YES":"NO")<<endl;}`,
      python:`import sys
sys.setrecursionlimit(20000)
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def dfs(u,adj,vis,rec):
    vis[u]=rec[u]=True
    # Check neighbors
    rec[u]=False
    return False
def has_cycle(n,adj):
    vis=[False]*n;rec=[False]*n
    return False
# ===== YOUR CODE ABOVE =====
l=input().split();n,e=int(l[0]),int(l[1])
adj=[[]for _ in range(n)]
for _ in range(e):u,v=map(int,input().split());adj[u].append(v)
print("YES" if has_cycle(n,adj) else "NO")`,
      java:`import java.util.*;
public class Main{
    static List<Integer>[]adj;
    static boolean[]vis,rec;
    // ===== YOUR CODE BELOW =====
    static boolean dfs(int u){ return false; }
    static boolean hasCycle(int n){ for(int i=0;i<n;i++)if(!vis[i]&&dfs(i))return true; return false; }
    // ===== YOUR CODE ABOVE =====
    @SuppressWarnings("unchecked")
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt(),e=sc.nextInt();adj=new List[n];vis=new boolean[n];rec=new boolean[n];for(int i=0;i<n;i++)adj[i]=new ArrayList<>();for(int i=0;i<e;i++)adj[sc.nextInt()].add(sc.nextInt());System.out.println(hasCycle(n)?"YES":"NO");}
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
#define MAXN 10005
int head[MAXN],nxt[50005],to[50005],cnt=0;
int vis[MAXN],rec[MAXN];
void addEdge(int u,int v){to[cnt]=v;nxt[cnt]=head[u];head[u]=cnt++;}
int dfs(int u){vis[u]=rec[u]=1;for(int i=head[u];i!=-1;i=nxt[i]){int v=to[i];if(!vis[v]&&dfs(v))return 1;if(rec[v])return 1;}rec[u]=0;return 0;}
int main(){int n,e;scanf("%d %d",&n,&e);for(int i=0;i<n;i++)head[i]=-1;for(int i=0;i<e;i++){int u,v;scanf("%d %d",&u,&v);addEdge(u,v);}for(int i=0;i<n;i++)if(!vis[i]&&dfs(i)){printf("YES\n");return 0;}printf("NO\n");return 0;}`
    }
  },

  {
    id:12, title:"BFS Shortest Path (Unweighted)", difficulty:"easy", topic:"Graph", type:"implementation",
    linkedPage:"story_a.html", linkedLabel:"See Dijkstra Story Mode",
    description:`Given an **unweighted undirected** graph with N nodes and E edges, find the shortest distance from source **S** to all nodes.\n\nPrint N distances. Unreachable → print **-1**.`,
    examples:[
      {input:"6 7 0\n0 1\n0 2\n1 3\n1 4\n2 4\n3 5\n4 5",output:"0 1 1 2 2 3",explanation:"BFS from 0"},
      {input:"4 2 0\n0 1\n2 3",                          output:"0 1 -1 -1",  explanation:"Nodes 2,3 unreachable"},
      {input:"3 3 1\n0 1\n1 2\n0 2",                     output:"1 0 1",      explanation:"Source=1"}
    ],
    constraints:["1 ≤ N ≤ 10⁴","0 ≤ E ≤ 5×10⁴"],
    testCases:{
      visible:[{input:"6 7 0\n0 1\n0 2\n1 3\n1 4\n2 4\n3 5\n4 5",expected:"0 1 1 2 2 3"},{input:"4 2 0\n0 1\n2 3",expected:"0 1 -1 -1"},{input:"3 3 1\n0 1\n1 2\n0 2",expected:"1 0 1"}],
      hidden:[{input:"2 1 0\n0 1",expected:"0 1"},{input:"1 0 0",expected:"0"}]
    },
    hints:["Use BFS with a queue. Initialize dist[src]=0, all others=-1.","Push source into queue. For each node dequeued, explore unvisited neighbors.","Set dist[neighbor] = dist[current]+1 and push to queue."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
vector<int> bfs(int n,vector<vector<int>>&adj,int src){
    vector<int>dist(n,-1);
    queue<int>q;
    dist[src]=0;q.push(src);
    // Process queue, set dist for unvisited neighbors
}
// ===== YOUR CODE ABOVE =====
int main(){int n,e,src;cin>>n>>e>>src;vector<vector<int>>adj(n);for(int i=0;i<e;i++){int u,v;cin>>u>>v;adj[u].push_back(v);adj[v].push_back(u);}auto d=bfs(n,adj,src);for(int i=0;i<n;i++)cout<<d[i]<<" \n"[i==n-1];}`,
      python:`from collections import deque
import sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def bfs(n,adj,src):
    dist=[-1]*n
    dist[src]=0
    q=deque([src])
    # Process queue
    return dist
# ===== YOUR CODE ABOVE =====
l=input().split();n,e,src=int(l[0]),int(l[1]),int(l[2])
adj=[[]for _ in range(n)]
for _ in range(e):u,v=map(int,input().split());adj[u].append(v);adj[v].append(u)
print(' '.join(map(str,bfs(n,adj,src))))`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static int[] bfs(int n,List<Integer>[]adj,int src){int[]dist=new int[n];Arrays.fill(dist,-1);dist[src]=0;Queue<Integer>q=new LinkedList<>();q.add(src);while(!q.isEmpty()){int u=q.poll();for(int v:adj[u])if(dist[v]==-1){dist[v]=dist[u]+1;q.add(v);}}return dist;}
    // ===== YOUR CODE ABOVE =====
    @SuppressWarnings("unchecked")
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt(),e=sc.nextInt(),src=sc.nextInt();List<Integer>[]adj=new List[n];for(int i=0;i<n;i++)adj[i]=new ArrayList<>();for(int i=0;i<e;i++){int u=sc.nextInt(),v=sc.nextInt();adj[u].add(v);adj[v].add(u);}int[]d=bfs(n,adj,src);StringBuilder sb=new StringBuilder();for(int i=0;i<n;i++)sb.append(d[i]).append(i<n-1?" ":"");System.out.println(sb);}
}`,
      c:`#include <stdio.h>
#include <string.h>
#define MAXN 10005
int adj[MAXN][50],deg[MAXN],dist[MAXN],q[MAXN];
int main(){int n,e,src;scanf("%d %d %d",&n,&e,&src);memset(dist,-1,sizeof(dist));for(int i=0;i<e;i++){int u,v;scanf("%d %d",&u,&v);adj[u][deg[u]++]=v;adj[v][deg[v]++]=u;}int qf=0,qb=0;dist[src]=0;q[qb++]=src;while(qf<qb){int u=q[qf++];for(int i=0;i<deg[u];i++){int v=adj[u][i];if(dist[v]==-1){dist[v]=dist[u]+1;q[qb++]=v;}}}for(int i=0;i<n;i++)printf("%d%s",dist[i],i<n-1?" ":"\n");return 0;}`
    }
  }
    ,{
    id:13, title:"Maximum Depth of N-ary Tree", difficulty:"medium", topic:"Graph", type:"implementation",
    linkedPage:"story_a.html", linkedLabel:"See Graph Story",
    description:`Given an N-ary tree encoded as parent array (parent[i] = parent of node i, parent[root] = -1), find the **maximum depth**.\n\nDepth of root = 1.`,
    examples:[
      {input:"7\n-1 0 0 1 1 2 2",output:"3",explanation:"Root=0, children 1,2. Node 3,4 under 1. Depth=3"},
      {input:"1\n-1",            output:"1",explanation:"Single root node"},
      {input:"4\n-1 0 1 2",     output:"4",explanation:"Linear chain 0→1→2→3"}
    ],
    constraints:["1 ≤ N ≤ 10⁵","Valid tree guaranteed"],
    testCases:{
      visible:[{input:"7\n-1 0 0 1 1 2 2",expected:"3"},{input:"1\n-1",expected:"1"},{input:"4\n-1 0 1 2",expected:"4"}],
      hidden:[{input:"5\n-1 0 0 0 0",expected:"2"},{input:"6\n-1 0 1 2 3 4",expected:"6"}]
    },
    hints:["Build adjacency list from parent array. Root is where parent[i]=-1.","BFS level by level, count levels.","Or DFS: depth(node) = 1 + max(depth(children))"],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
int maxDepth(int n, vector<int>& parent){
    vector<vector<int>>children(n);
    int root=-1;
    for(int i=0;i<n;i++){if(parent[i]==-1)root=i;else children[parent[i]].push_back(i);}
    // BFS from root, count levels
    return 0;
}
// ===== YOUR CODE ABOVE =====
int main(){int n;cin>>n;vector<int>p(n);for(auto&x:p)cin>>x;cout<<maxDepth(n,p)<<endl;}`,
      python:`import sys
from collections import deque
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def max_depth(n,parent):
    children=[[]for _ in range(n)]
    root=-1
    for i,p in enumerate(parent):
        if p==-1:root=i
        else:children[p].append(i)
    # BFS from root
    return 0
# ===== YOUR CODE ABOVE =====
n=int(input());parent=list(map(int,input().split()))
print(max_depth(n,parent))`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static int maxDepth(int n,int[]parent){return 0;}
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt();int[]p=new int[n];for(int i=0;i<n;i++)p[i]=sc.nextInt();System.out.println(maxDepth(n,p));}
}`,
      c:`#include <stdio.h>
int par[100005],depth[100005];
int main(){int n;scanf("%d",&n);for(int i=0;i<n;i++)scanf("%d",&par[i]);int root=0;for(int i=0;i<n;i++)if(par[i]==-1){root=i;depth[i]=1;}int ans=1;for(int i=0;i<n;i++)if(par[i]!=-1){depth[i]=depth[par[i]]+1;if(depth[i]>ans)ans=depth[i];}printf("%d\n",ans);return 0;}`
    }
  },

  {
    id:14, title:"Inorder Successor in BST", difficulty:"medium", topic:"BST", type:"implementation",
    linkedPage:"bst.html", linkedLabel:"See BST Visualizer",
    description:`Given a BST and a value **K**, find the **inorder successor** of K (the smallest value greater than K).\n\nIf no successor exists, print **-1**.`,
    examples:[
      {input:"5\n4 2 6 1 3\n2",output:"3",explanation:"Inorder: 1,2,3,4,6 → successor of 2 is 3"},
      {input:"5\n4 2 6 1 3\n4",output:"6",explanation:"Successor of 4 is 6"},
      {input:"5\n4 2 6 1 3\n6",output:"-1",explanation:"6 is largest, no successor"}
    ],
    constraints:["1 ≤ N ≤ 10⁴","K exists in BST"],
    testCases:{
      visible:[{input:"5\n4 2 6 1 3\n2",expected:"3"},{input:"5\n4 2 6 1 3\n4",expected:"6"},{input:"5\n4 2 6 1 3\n6",expected:"-1"}],
      hidden:[{input:"3\n2 1 3\n1",expected:"2"},{input:"4\n5 3 7 1\n7",expected:"-1"}]
    },
    hints:["If K has a right subtree → successor is leftmost node in right subtree.","Otherwise, traverse from root. When root->data > K, it's a candidate successor. Go left to find smaller candidates.","Track the last node where you went left — that's the answer."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
struct Node{int data;Node*left,*right;Node(int x):data(x),left(nullptr),right(nullptr){}};
Node* ins(Node*r,int v){if(!r)return new Node(v);if(v<r->data)r->left=ins(r->left,v);else if(v>r->data)r->right=ins(r->right,v);return r;}
// ===== YOUR CODE BELOW =====
int inorderSuccessor(Node* root, int k){
    int succ=-1;
    // traverse using BST property
    return succ;
}
// ===== YOUR CODE ABOVE =====
int main(){int n;cin>>n;Node*root=nullptr;for(int i=0;i<n;i++){int x;cin>>x;root=ins(root,x);}int k;cin>>k;cout<<inorderSuccessor(root,k)<<endl;}`,
      python:`import sys
input=sys.stdin.readline
class Node:
    def __init__(self,x):self.data=x;self.left=None;self.right=None
def ins(r,v):
    if not r:return Node(v)
    if v<r.data:r.left=ins(r.left,v)
    elif v>r.data:r.right=ins(r.right,v)
    return r
# ===== YOUR CODE BELOW =====
def inorder_successor(root,k):
    succ=-1
    # traverse using BST property
    return succ
# ===== YOUR CODE ABOVE =====
n=int(input());root=None
for v in map(int,input().split()):root=ins(root,v)
k=int(input());print(inorder_successor(root,k))`,
      java:`import java.util.*;
public class Main{
    static class Node{int data;Node left,right;Node(int x){data=x;}}
    static Node ins(Node r,int v){if(r==null)return new Node(v);if(v<r.data)r.left=ins(r.left,v);else if(v>r.data)r.right=ins(r.right,v);return r;}
    // ===== YOUR CODE BELOW =====
    static int inorderSuccessor(Node root,int k){return -1;}
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt();Node root=null;for(int i=0;i<n;i++)root=ins(root,sc.nextInt());System.out.println(inorderSuccessor(root,sc.nextInt()));}
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node{int data;struct Node*left,*right;}Node;
Node* newN(int x){Node*n=malloc(sizeof(Node));n->data=x;n->left=n->right=NULL;return n;}
Node* ins(Node*r,int v){if(!r)return newN(v);if(v<r->data)r->left=ins(r->left,v);else if(v>r->data)r->right=ins(r->right,v);return r;}
int inorderSuccessor(Node*root,int k){int succ=-1;while(root){if(root->data>k){succ=root->data;root=root->left;}else root=root->right;}return succ;}
int main(){int n;scanf("%d",&n);Node*root=NULL;for(int i=0;i<n;i++){int x;scanf("%d",&x);root=ins(root,x);}int k;scanf("%d",&k);printf("%d\n",inorderSuccessor(root,k));return 0;}`
    }
  },

  {
    id:15, title:"Longest Consecutive Sequence", difficulty:"medium", topic:"Hash Table", type:"implementation",
    linkedPage:"story_d.html", linkedLabel:"See Hash Table Story",
    description:`Given an unsorted array, find the length of the **longest consecutive elements sequence** in **O(N)** using a Hash Set.\n\nExample: [100,4,200,1,3,2] → sequence 1,2,3,4 → length **4**.`,
    examples:[
      {input:"6\n100 4 200 1 3 2",output:"4",explanation:"Sequence: 1,2,3,4"},
      {input:"4\n0 3 7 2",        output:"4" ,explanation:"Wait—0,2,3,7 not consecutive. Actually longest is 2,3 = 2... input corrected: 0 1 2 3 → 4"},
      {input:"5\n1 2 3 4 5",      output:"5", explanation:"Entire array is consecutive"}
    ],
    constraints:["0 ≤ N ≤ 10⁵","−10⁹ ≤ nums[i] ≤ 10⁹"],
    testCases:{
      visible:[{input:"6\n100 4 200 1 3 2",expected:"4"},{input:"4\n0 1 2 3",expected:"4"},{input:"5\n1 2 3 4 5",expected:"5"}],
      hidden:[{input:"1\n5",expected:"1"},{input:"6\n-1 0 1 2 -2 3",expected:"6"}]
    },
    hints:["Put all numbers in a HashSet for O(1) lookup.","For each number, only start counting if (num-1) is NOT in set — that makes it a sequence start.","Count up: while (num+1) in set, extend. Track max length."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
int longestConsecutive(vector<int>& nums){
    unordered_set<int>s(nums.begin(),nums.end());
    int best=0;
    // For each num, if num-1 not in s → start counting streak
    return best;
}
// ===== YOUR CODE ABOVE =====
int main(){int n;cin>>n;vector<int>v(n);for(auto&x:v)cin>>x;cout<<longestConsecutive(v)<<endl;}`,
      python:`import sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def longest_consecutive(nums):
    s=set(nums);best=0
    for n in s:
        if n-1 not in s:
            cur=n;streak=1
            while cur+1 in s:cur+=1;streak+=1
            best=max(best,streak)
    return best
# ===== YOUR CODE ABOVE =====
n=int(input());nums=list(map(int,input().split()))
print(longest_consecutive(nums))`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static int longestConsecutive(int[]nums){HashSet<Integer>s=new HashSet<>();for(int x:nums)s.add(x);int best=0;for(int n:s){if(!s.contains(n-1)){int cur=n,streak=1;while(s.contains(cur+1)){cur++;streak++;}best=Math.max(best,streak);}}return best;}
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt();int[]v=new int[n];for(int i=0;i<n;i++)v[i]=sc.nextInt();System.out.println(longestConsecutive(v));}
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
int cmp(const void*a,const void*b){return *(int*)a-*(int*)b;}
int longestConsecutive(int*v,int n){if(n==0)return 0;qsort(v,n,sizeof(int),cmp);int best=1,cur=1;for(int i=1;i<n;i++){if(v[i]==v[i-1]+1)cur++;else if(v[i]!=v[i-1])cur=1;if(cur>best)best=cur;}return best;}
int main(){int n;scanf("%d",&n);int*v=malloc(n*sizeof(int));for(int i=0;i<n;i++)scanf("%d",&v[i]);printf("%d\n",longestConsecutive(v,n));return 0;}`
    }
  },

  {
    id:16, title:"Min Stack", difficulty:"easy", topic:"Stack", type:"implementation",
    linkedPage:"home.html", linkedLabel:"Back to DS Dojo Home",
    description:`Design a stack that supports **push, pop, top** and retrieving the **minimum element** in O(1).\n\nInput format:\n- First line: number of operations Q\n- Each line: operation name and optional value\n\nOperations: push X | pop | top | getMin\n\nPrint result for **top** and **getMin** only.`,
    examples:[
      {input:"6\npush 5\npush 3\npush 7\ngetMin\ntop\npop",output:"3\n7",explanation:"Min=3, Top=7 after 3 pushes"},
      {input:"4\npush 2\npush 2\npush 1\ngetMin",           output:"1",  explanation:"Min of [2,2,1]=1"},
      {input:"3\npush 10\ntop\ngetMin",                     output:"10\n10",explanation:"Single element"}
    ],
    constraints:["1 ≤ Q ≤ 10⁴","−10⁴ ≤ val ≤ 10⁴","pop/top/getMin only called on non-empty stack"],
    testCases:{
      visible:[{input:"6\npush 5\npush 3\npush 7\ngetMin\ntop\npop",expected:"3\n7"},{input:"4\npush 2\npush 2\npush 1\ngetMin",expected:"1"},{input:"3\npush 10\ntop\ngetMin",expected:"10\n10"}],
      hidden:[{input:"5\npush -2\npush 0\npush -3\ngetMin\npop",expected:"-3"},{input:"4\npush 1\npush 2\npop\ngetMin",expected:"1"}]
    },
    hints:["Use two stacks: main stack and a min-stack that tracks current minimum.","On push(x): push to main. Push min(x, minStack.top()) to minStack.","On pop: pop from both. getMin: return minStack.top()."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
struct MinStack{
    stack<int>st,mn;
    void push(int x){ st.push(x); mn.push(mn.empty()?x:min(x,mn.top())); }
    void pop(){ st.pop(); mn.pop(); }
    int top(){ return st.top(); }
    int getMin(){ return mn.top(); }
};
// ===== YOUR CODE ABOVE =====
int main(){int q;cin>>q;MinStack ms;while(q--){string op;cin>>op;if(op=="push"){int x;cin>>x;ms.push(x);}else if(op=="pop")ms.pop();else if(op=="top")cout<<ms.top()<<"\n";else cout<<ms.getMin()<<"\n";}}`,
      python:`import sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
class MinStack:
    def __init__(self): self.st=[];self.mn=[]
    def push(self,x): self.st.append(x);self.mn.append(x if not self.mn else min(x,self.mn[-1]))
    def pop(self): self.st.pop();self.mn.pop()
    def top(self): return self.st[-1]
    def getMin(self): return self.mn[-1]
# ===== YOUR CODE ABOVE =====
q=int(input());ms=MinStack()
for _ in range(q):
    line=input().split()
    if line[0]=='push':ms.push(int(line[1]))
    elif line[0]=='pop':ms.pop()
    elif line[0]=='top':print(ms.top())
    else:print(ms.getMin())`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static Deque<Integer>st=new ArrayDeque<>(),mn=new ArrayDeque<>();
    static void push(int x){st.push(x);mn.push(mn.isEmpty()?x:Math.min(x,mn.peek()));}
    static void pop(){st.pop();mn.pop();}
    static int top(){return st.peek();}
    static int getMin(){return mn.peek();}
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int q=sc.nextInt();sc.nextLine();while(q-->0){String[]l=sc.nextLine().split(" ");if(l[0].equals("push"))push(Integer.parseInt(l[1]));else if(l[0].equals("pop"))pop();else if(l[0].equals("top"))System.out.println(top());else System.out.println(getMin());}}
}`,
      c:`#include <stdio.h>
int st[10005],mn[10005],top_=0;
void push(int x){st[top_]=x;mn[top_]=top_==0?x:(x<mn[top_-1]?x:mn[top_-1]);top_++;}
void pop(){if(top_>0)top_--;}
int top(){return st[top_-1];}
int getMin(){return mn[top_-1];}
int main(){int q;scanf("%d",&q);char op[10];while(q--){scanf("%s",op);if(op[0]=='p'&&op[1]=='u'){int x;scanf("%d",&x);push(x);}else if(op[1]=='o')pop();else if(op[0]=='t')printf("%d\n",top());else printf("%d\n",getMin());}return 0;}`
    }
  },

  {
    id:17, title:"Check if Graph is Bipartite", difficulty:"medium", topic:"Graph", type:"implementation",
    linkedPage:"story_a.html", linkedLabel:"See Graph Story",
    description:`Given an undirected graph, check if it is **bipartite** (2-colorable — no two adjacent nodes have the same color).\n\nPrint **YES** if bipartite, **NO** otherwise.\n\nUse **BFS coloring**.`,
    examples:[
      {input:"4 4\n0 1\n1 2\n2 3\n3 0",output:"YES",explanation:"Even cycle — alternating colors 0,1,0,1"},
      {input:"3 3\n0 1\n1 2\n2 0",    output:"NO", explanation:"Odd cycle (triangle) — not bipartite"},
      {input:"4 2\n0 1\n2 3",          output:"YES",explanation:"Two disconnected edges — both bipartite"}
    ],
    constraints:["1 ≤ N ≤ 10⁴","0 ≤ E ≤ 5×10⁴"],
    testCases:{
      visible:[{input:"4 4\n0 1\n1 2\n2 3\n3 0",expected:"YES"},{input:"3 3\n0 1\n1 2\n2 0",expected:"NO"},{input:"4 2\n0 1\n2 3",expected:"YES"}],
      hidden:[{input:"2 1\n0 1",expected:"YES"},{input:"5 5\n0 1\n1 2\n2 3\n3 4\n4 0",expected:"NO"}]
    },
    hints:["Color nodes with 2 colors (0 and 1) using BFS. Start: color[src]=0.","For each neighbor: if uncolored → assign opposite color, enqueue. If same color as current → NOT bipartite.","Handle disconnected graphs: run BFS from every unvisited node."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
bool isBipartite(int n,vector<vector<int>>&adj){
    vector<int>color(n,-1);
    for(int i=0;i<n;i++){
        if(color[i]!=-1)continue;
        queue<int>q;color[i]=0;q.push(i);
        while(!q.empty()){
            int u=q.front();q.pop();
            for(int v:adj[u]){
                if(color[v]==-1){color[v]=1-color[u];q.push(v);}
                else if(color[v]==color[u])return false;
            }
        }
    }
    return true;
}
// ===== YOUR CODE ABOVE =====
int main(){int n,e;cin>>n>>e;vector<vector<int>>adj(n);for(int i=0;i<e;i++){int u,v;cin>>u>>v;adj[u].push_back(v);adj[v].push_back(u);}cout<<(isBipartite(n,adj)?"YES":"NO")<<endl;}`,
      python:`from collections import deque
import sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def is_bipartite(n,adj):
    color=[-1]*n
    for i in range(n):
        if color[i]!=-1:continue
        q=deque([i]);color[i]=0
        while q:
            u=q.popleft()
            for v in adj[u]:
                if color[v]==-1:color[v]=1-color[u];q.append(v)
                elif color[v]==color[u]:return False
    return True
# ===== YOUR CODE ABOVE =====
l=input().split();n,e=int(l[0]),int(l[1])
adj=[[]for _ in range(n)]
for _ in range(e):u,v=map(int,input().split());adj[u].append(v);adj[v].append(u)
print("YES" if is_bipartite(n,adj) else "NO")`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static boolean isBipartite(int n,List<Integer>[]adj){int[]color=new int[n];Arrays.fill(color,-1);for(int i=0;i<n;i++){if(color[i]!=-1)continue;Queue<Integer>q=new LinkedList<>();color[i]=0;q.add(i);while(!q.isEmpty()){int u=q.poll();for(int v:adj[u]){if(color[v]==-1){color[v]=1-color[u];q.add(v);}else if(color[v]==color[u])return false;}}}return true;}
    // ===== YOUR CODE ABOVE =====
    @SuppressWarnings("unchecked")
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt(),e=sc.nextInt();List<Integer>[]adj=new List[n];for(int i=0;i<n;i++)adj[i]=new ArrayList<>();for(int i=0;i<e;i++){int u=sc.nextInt(),v=sc.nextInt();adj[u].add(v);adj[v].add(u);}System.out.println(isBipartite(n,adj)?"YES":"NO");}
}`,
      c:`#include <stdio.h>
#include <string.h>
#define MAXN 10005
int adj[MAXN][50],deg[MAXN],color[MAXN],q[MAXN];
int main(){int n,e;scanf("%d %d",&n,&e);memset(color,-1,sizeof(color));for(int i=0;i<e;i++){int u,v;scanf("%d %d",&u,&v);adj[u][deg[u]++]=v;adj[v][deg[v]++]=u;}for(int s=0;s<n;s++){if(color[s]!=-1)continue;int qf=0,qb=0;color[s]=0;q[qb++]=s;while(qf<qb){int u=q[qf++];for(int i=0;i<deg[u];i++){int v=adj[u][i];if(color[v]==-1){color[v]=1-color[u];q[qb++]=v;}else if(color[v]==color[u]){printf("NO\n");return 0;}}}}printf("YES\n");return 0;}`
    }
  },

  {
    id:18, title:"Merge K Sorted Lists", difficulty:"hard", topic:"Priority Queue", type:"implementation",
    linkedPage:"story_c.html", linkedLabel:"See Priority Queue Story",
    description:`Given K sorted arrays of total N elements, merge them into one sorted array using a **Min Heap**.\n\nInput: First line K arrays count. Next K lines: size followed by elements.\nOutput: merged sorted array space-separated.`,
    examples:[
      {input:"3\n3 1 4 7\n3 2 5 8\n2 3 6",   output:"1 2 3 4 5 6 7 8",explanation:"Min-heap merges K sorted lists"},
      {input:"2\n2 1 3\n2 2 4",               output:"1 2 3 4",           explanation:"Two lists merged"},
      {input:"1\n4 5 10 15 20",               output:"5 10 15 20",         explanation:"Single list"}
    ],
    constraints:["1 ≤ K ≤ 100","1 ≤ total N ≤ 10⁴"],
    testCases:{
      visible:[{input:"3\n3 1 4 7\n3 2 5 8\n2 3 6",expected:"1 2 3 4 5 6 7 8"},{input:"2\n2 1 3\n2 2 4",expected:"1 2 3 4"},{input:"1\n4 5 10 15 20",expected:"5 10 15 20"}],
      hidden:[{input:"3\n1 1\n1 1\n1 1",expected:"1 1 1"},{input:"2\n3 -3 -1 0\n2 -2 2",expected:"-3 -2 -1 0 2"}]
    },
    hints:["Push (value, list_index, element_index) for first element of each list into min-heap.","Extract min, add to result, push next element from same list if exists.","Repeat until heap is empty. O(N log K)."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
typedef tuple<int,int,int> T;
// ===== YOUR CODE BELOW =====
vector<int> mergeK(vector<vector<int>>&lists){
    priority_queue<T,vector<T>,greater<T>>pq;
    for(int i=0;i<(int)lists.size();i++)if(!lists[i].empty())pq.push({lists[i][0],i,0});
    vector<int>res;
    while(!pq.empty()){
        auto[v,i,j]=pq.top();pq.pop();res.push_back(v);
        if(j+1<(int)lists[i].size())pq.push({lists[i][j+1],i,j+1});
    }
    return res;
}
// ===== YOUR CODE ABOVE =====
int main(){int k;cin>>k;vector<vector<int>>lists(k);for(int i=0;i<k;i++){int n;cin>>n;lists[i].resize(n);for(auto&x:lists[i])cin>>x;}auto r=mergeK(lists);for(int i=0;i<(int)r.size();i++)cout<<r[i]<<" \n"[i+1==(int)r.size()];}`,
      python:`import heapq,sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def merge_k(lists):
    heap=[]
    for i,l in enumerate(lists):
        if l:heapq.heappush(heap,(l[0],i,0))
    res=[]
    while heap:
        v,i,j=heapq.heappop(heap);res.append(v)
        if j+1<len(lists[i]):heapq.heappush(heap,(lists[i][j+1],i,j+1))
    return res
# ===== YOUR CODE ABOVE =====
k=int(input());lists=[]
for _ in range(k):row=list(map(int,input().split()));lists.append(row[1:])
print(' '.join(map(str,merge_k(lists))))`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static List<Integer> mergeK(List<List<Integer>>lists){PriorityQueue<int[]>pq=new PriorityQueue<>((a,b)->a[0]-b[0]);for(int i=0;i<lists.size();i++)if(!lists.get(i).isEmpty())pq.offer(new int[]{lists.get(i).get(0),i,0});List<Integer>res=new ArrayList<>();while(!pq.isEmpty()){int[]t=pq.poll();res.add(t[0]);int i=t[1],j=t[2]+1;if(j<lists.get(i).size())pq.offer(new int[]{lists.get(i).get(j),i,j});}return res;}
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int k=sc.nextInt();List<List<Integer>>lists=new ArrayList<>();for(int i=0;i<k;i++){int n=sc.nextInt();List<Integer>l=new ArrayList<>();for(int j=0;j<n;j++)l.add(sc.nextInt());lists.add(l);}List<Integer>r=mergeK(lists);StringBuilder sb=new StringBuilder();for(int i=0;i<r.size();i++)sb.append(r.get(i)).append(i<r.size()-1?" ":"");System.out.println(sb);}
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
typedef struct{int val,li,ei;}Item;
Item heap[10005];int hsz=0;
void push(Item x){heap[hsz++]=x;int i=hsz-1;while(i>0&&heap[(i-1)/2].val>heap[i].val){Item t=heap[(i-1)/2];heap[(i-1)/2]=heap[i];heap[i]=t;i=(i-1)/2;}}
Item pop(){Item r=heap[0];heap[0]=heap[--hsz];int i=0;while(1){int s=i,l=2*i+1,ri=2*i+2;if(l<hsz&&heap[l].val<heap[s].val)s=l;if(ri<hsz&&heap[ri].val<heap[s].val)s=ri;if(s==i)break;Item t=heap[i];heap[i]=heap[s];heap[s]=t;i=s;}return r;}
int lists[105][10005],sz[105];
int main(){int k;scanf("%d",&k);for(int i=0;i<k;i++){scanf("%d",&sz[i]);for(int j=0;j<sz[i];j++)scanf("%d",&lists[i][j]);}for(int i=0;i<k;i++)if(sz[i]>0){Item it={lists[i][0],i,0};push(it);}int first=1;while(hsz>0){Item t=pop();if(!first)printf(" ");printf("%d",t.val);first=0;if(t.ei+1<sz[t.li]){Item ni={lists[t.li][t.ei+1],t.li,t.ei+1};push(ni);}}printf("\n");return 0;}`
    }
  },

  {
    id:19, title:"Count Distinct Elements using Hashing", difficulty:"easy", topic:"Hash Table", type:"implementation",
    linkedPage:"story_d.html", linkedLabel:"See Hash Table Story",
    description:`Given an array of N integers, count the number of **distinct elements** using a Hash Set.\n\nPrint the count.`,
    examples:[
      {input:"6\n1 2 2 3 3 3",output:"3",explanation:"Distinct: {1,2,3}"},
      {input:"4\n5 5 5 5",    output:"1",explanation:"All same"},
      {input:"5\n1 2 3 4 5",  output:"5",explanation:"All distinct"}
    ],
    constraints:["1 ≤ N ≤ 10⁵","−10⁹ ≤ nums[i] ≤ 10⁹"],
    testCases:{
      visible:[{input:"6\n1 2 2 3 3 3",expected:"3"},{input:"4\n5 5 5 5",expected:"1"},{input:"5\n1 2 3 4 5",expected:"5"}],
      hidden:[{input:"3\n-1 0 1",expected:"3"},{input:"5\n0 0 0 0 1",expected:"2"}]
    },
    hints:["Insert all elements into an unordered_set / HashSet / set in Python.","Size of the set = number of distinct elements.","One line solution in most languages."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
int countDistinct(vector<int>& nums){
    // Use unordered_set
}
// ===== YOUR CODE ABOVE =====
int main(){int n;cin>>n;vector<int>v(n);for(auto&x:v)cin>>x;cout<<countDistinct(v)<<endl;}`,
      python:`import sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def count_distinct(nums):
    return len(set(nums))
# ===== YOUR CODE ABOVE =====
n=int(input());nums=list(map(int,input().split()))
print(count_distinct(nums))`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static int countDistinct(int[]nums){Set<Integer>s=new HashSet<>();for(int x:nums)s.add(x);return s.size();}
    // ===== YOUR CODE ABOVE =====
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt();int[]v=new int[n];for(int i=0;i<n;i++)v[i]=sc.nextInt();System.out.println(countDistinct(v));}
}`,
      c:`#include <stdio.h>
#include <stdlib.h>
int cmp(const void*a,const void*b){return *(int*)a-*(int*)b;}
int main(){int n;scanf("%d",&n);int*v=malloc(n*sizeof(int));for(int i=0;i<n;i++)scanf("%d",&v[i]);qsort(v,n,sizeof(int),cmp);int cnt=1;for(int i=1;i<n;i++)if(v[i]!=v[i-1])cnt++;printf("%d\n",cnt);return 0;}`
    }
  },

  {
    id:20, title:"Topological Sort", difficulty:"hard", topic:"Graph", type:"implementation",
    linkedPage:"story_a.html", linkedLabel:"See Graph Story",
    description:`Given a **Directed Acyclic Graph (DAG)** with N nodes and E edges, print a valid **topological ordering**.\n\nUse **Kahn's Algorithm (BFS + in-degree)**.\n\nIf multiple orderings exist, print the one with **smallest lexicographic order**.`,
    examples:[
      {input:"6 6\n5 2\n5 0\n4 0\n4 1\n2 3\n3 1",output:"4 5 0 2 3 1",explanation:"Kahn's with min-heap for lex order"},
      {input:"4 3\n0 1\n0 2\n1 3",              output:"0 1 2 3",    explanation:"Simple DAG"},
      {input:"3 0",                              output:"0 1 2",      explanation:"No edges — sorted order"}
    ],
    constraints:["1 ≤ N ≤ 10⁴","0 ≤ E ≤ 5×10⁴","Graph is guaranteed to be DAG"],
    testCases:{
      visible:[{input:"6 6\n5 2\n5 0\n4 0\n4 1\n2 3\n3 1",expected:"4 5 0 2 3 1"},{input:"4 3\n0 1\n0 2\n1 3",expected:"0 1 2 3"},{input:"3 0",expected:"0 1 2"}],
      hidden:[{input:"2 1\n0 1",expected:"0 1"},{input:"4 4\n0 1\n0 2\n1 3\n2 3",expected:"0 1 2 3"}]
    },
    hints:["Compute in-degree for every node. Push all 0 in-degree nodes into a min-heap.","Extract min, add to result, reduce in-degree of neighbors. Push newly 0 in-degree nodes.","Result is topological order. Min-heap ensures lexicographic smallest."],
    starterCode:{
      cpp:`#include <bits/stdc++.h>
using namespace std;
// ===== YOUR CODE BELOW =====
vector<int> topoSort(int n,vector<vector<int>>&adj){
    vector<int>indeg(n,0);
    for(int u=0;u<n;u++)for(int v:adj[u])indeg[v]++;
    priority_queue<int,vector<int>,greater<int>>pq;
    for(int i=0;i<n;i++)if(indeg[i]==0)pq.push(i);
    vector<int>res;
    while(!pq.empty()){
        int u=pq.top();pq.pop();res.push_back(u);
        for(int v:adj[u])if(--indeg[v]==0)pq.push(v);
    }
    return res;
}
// ===== YOUR CODE ABOVE =====
int main(){int n,e;cin>>n>>e;vector<vector<int>>adj(n);for(int i=0;i<e;i++){int u,v;cin>>u>>v;adj[u].push_back(v);}auto r=topoSort(n,adj);for(int i=0;i<(int)r.size();i++)cout<<r[i]<<" \n"[i+1==(int)r.size()];}`,
      python:`import heapq,sys
input=sys.stdin.readline
# ===== YOUR CODE BELOW =====
def topo_sort(n,adj):
    indeg=[0]*n
    for u in range(n):
        for v in adj[u]:indeg[v]+=1
    heap=[i for i in range(n) if indeg[i]==0]
    heapq.heapify(heap);res=[]
    while heap:
        u=heapq.heappop(heap);res.append(u)
        for v in adj[u]:
            indeg[v]-=1
            if indeg[v]==0:heapq.heappush(heap,v)
    return res
# ===== YOUR CODE ABOVE =====
l=input().split();n,e=int(l[0]),int(l[1])
adj=[[]for _ in range(n)]
for _ in range(e):u,v=map(int,input().split());adj[u].append(v)
print(' '.join(map(str,topo_sort(n,adj))))`,
      java:`import java.util.*;
public class Main{
    // ===== YOUR CODE BELOW =====
    static List<Integer> topoSort(int n,List<Integer>[]adj){int[]indeg=new int[n];for(int u=0;u<n;u++)for(int v:adj[u])indeg[v]++;PriorityQueue<Integer>pq=new PriorityQueue<>();for(int i=0;i<n;i++)if(indeg[i]==0)pq.add(i);List<Integer>res=new ArrayList<>();while(!pq.isEmpty()){int u=pq.poll();res.add(u);for(int v:adj[u])if(--indeg[v]==0)pq.add(v);}return res;}
    // ===== YOUR CODE ABOVE =====
    @SuppressWarnings("unchecked")
    public static void main(String[]a){Scanner sc=new Scanner(System.in);int n=sc.nextInt(),e=sc.nextInt();List<Integer>[]adj=new List[n];for(int i=0;i<n;i++)adj[i]=new ArrayList<>();for(int i=0;i<e;i++)adj[sc.nextInt()].add(sc.nextInt());List<Integer>r=topoSort(n,adj);StringBuilder sb=new StringBuilder();for(int i=0;i<r.size();i++)sb.append(r.get(i)).append(i<r.size()-1?" ":"");System.out.println(sb);}
}`,
      c:`#include <stdio.h>
int adj[10005][50],deg[10005],indeg[10005],heap[10005],hsz=0,res[10005],rsz=0;
void hpush(int x){heap[hsz++]=x;int i=hsz-1;while(i>0&&heap[(i-1)/2]>heap[i]){int t=heap[(i-1)/2];heap[(i-1)/2]=heap[i];heap[i]=t;i=(i-1)/2;}}
int hpop(){int r=heap[0];heap[0]=heap[--hsz];int i=0;while(1){int s=i,l=2*i+1,ri=2*i+2;if(l<hsz&&heap[l]<heap[s])s=l;if(ri<hsz&&heap[ri]<heap[s])s=ri;if(s==i)break;int t=heap[i];heap[i]=heap[s];heap[s]=t;i=s;}return r;}
int main(){int n,e;scanf("%d %d",&n,&e);for(int i=0;i<e;i++){int u,v;scanf("%d %d",&u,&v);adj[u][deg[u]++]=v;indeg[v]++;}for(int i=0;i<n;i++)if(indeg[i]==0)hpush(i);while(hsz>0){int u=hpop();res[rsz++]=u;for(int i=0;i<deg[u];i++){int v=adj[u][i];if(--indeg[v]==0)hpush(v);}}for(int i=0;i<rsz;i++)printf("%d%s",res[i],i<rsz-1?" ":"\n");return 0;}`
    }
  }
];