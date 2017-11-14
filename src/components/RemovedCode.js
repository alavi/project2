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
