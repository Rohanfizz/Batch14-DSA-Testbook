function areSameType(opening, closing): boolean{
    if(opening == '(' && closing == ')') return true;
    if(opening == '[' && closing == ']') return true;
    if(opening == '{' && closing == '}') return true;
    return false;
}

function isValid(s: string): boolean {
    let st : string[] = [];

    for(let i = 0;i<s.length;i++){
        if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
            st.push(s[i]);
        }else{
            //Closing
            if(st.length == 0)  return false; //extra closing brackets
            let top = st[st.length-1];
            if(areSameType(top,s[i])) st.pop();
            else return false; // mismatch
        }
    }
    if(st.length > 0) return false; // extra opening brackets
    return true;
};