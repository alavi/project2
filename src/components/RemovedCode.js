//Removed from Post.js:
<div className="post-voting-box" >
    <button className="post-upvote"
        onClick={(e) => this.votePost(e, id, "upVote")}>Upvote</button>
        <button onClick={(e) => this.votePost(e, id, "upVote")} >
          + Upvote
        </button>
        <div className="post-score">
            <p>Score: <span>{voteScore}</span></p>
        </div>

    <button onClick={(e) => this.votePost(e, id, "downVote")} >
      - Downvote
    </button>

    <button className="post-downvote"
        onClick={(e) => this.votePost(e, id, "downVote")} >Downvote</button>
</div>
///Edit comment:
<div className="create-post-details">
    <a className="edit-cancel" onClick={(e) => this.handleCancel(e)}>Cancel</a>
    <button disabled={!this.isFormValid()}>Submit Comment</button>
</div>
</form>
</div >
///Changed code from EditPost.js:
<div className="create-post-details">
    <a className="edit-cancel" onClick={(e) => this.handleCancel(e)}>Cancel</a>
    <button disabled={!this.isFormValid()}>Submit Post</button>
</div>
</form>
</div >
)
}
}
/// REmoved from CommentList.js
</div>
<div className="create-post-details">
    <button disabled={!this.isFormValid()}>Add Comment</button>
</div>
</form>
</div>
///Removed from helpers.js:

export function uuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
